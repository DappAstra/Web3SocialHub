"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import type { NextPage } from "next";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdEmojiEmotions, MdInsertPhoto } from "react-icons/md";
import LensPost from "~~/components/LensPost";
import MirrorPost from "~~/components/MirrorPost";
import Navbar from "~~/components/Navbar";
import Sidebar from "~~/components/Sidebar";
import Spinner from "~~/components/Spinner";
import { useFollowersPosts } from "~~/hooks/graphQL/useFollowersPosts";
import { useUserFollowers } from "~~/hooks/graphQL/useUserFollowers";
import { useUserMetadata } from "~~/hooks/graphQL/useUserMetadata";
import { useUserPosts } from "~~/hooks/graphQL/useUserPosts";
import { useWritingEditionPurchased } from "~~/hooks/graphQL/useWritingEditionPurchased";
import { getIpfsUrl } from "~~/utils/ipfs/getIpfsUrl";

const Home: NextPage = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>("/Your Lens");
  const ref = useClickOutside(() => setIsFocused(false));

  // Lens
  const { userMetadata, loading: loadingUserMetadata } = useUserMetadata(1);
  const { userPosts, loading: loadingUserPosts, hasMore, loadMorePosts } = useUserPosts(1);
  const { followers } = useUserFollowers(1);
  const { followersPosts, loading: loadingFollowersPosts } = useFollowersPosts(followers);

  console.log(userMetadata, "@@@@userMetadata");

  // Mirror
  const { posts: mirrorPosts, loading: loadingMirrorPosts } = useWritingEditionPurchased();

  const profilePicture = userMetadata?.picture ? getIpfsUrl(userMetadata?.picture) : "/assets/avatar_default.jpg";

  // Infinite Scroll Observer
  const observerRef = useRef<HTMLDivElement | null>(null);
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        loadMorePosts();
      }
    },
    [hasMore, loadMorePosts],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });
    if (observerRef.current) observer.unobserve(observerRef.current);
  }, [handleObserver]);

  if (!userMetadata)
    return (
      <>
        <div className="flex items-center flex-col flex-grow pt-2">
          <Navbar userMetadata={userMetadata} />
          <div className="mainContainer">
            <Spinner />
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-2">
        <Navbar userMetadata={userMetadata} />
        <div className="mainContainer">
          <Sidebar userMetadata={userMetadata} setMenu={setMenu} />

          <div className="mainSection">
            {
              <div ref={ref} className={`createPostWidget ${isFocused ? "active" : ""}`}>
                <div className="createInput">
                  <img src={profilePicture} alt="" />
                  <input
                    type="text"
                    placeholder={
                      loadingUserMetadata ? "What's on your mind?" : `What's on your mind, ${userMetadata?.name}?`
                    }
                    id="createNewPost"
                    onFocus={() => setIsFocused(true)}
                  />
                  <button className="inBtn">Post</button>
                </div>
                <div className="otherOptions">
                  <div className="option">
                    <BsFillCameraVideoFill />
                    <span>Go Live</span>
                  </div>
                  <div className="option">
                    <MdInsertPhoto />
                    <span>Photo/Video</span>
                  </div>
                  <div className="option">
                    <MdEmojiEmotions />
                    <span>Feeling/Activity</span>
                  </div>
                </div>
              </div>
            }

            {/* Lens - Your Posts */}
            {menu === "/Your Lens" && (
              <>
                {!loadingUserPosts &&
                  userPosts.map((user, index) => {
                    return <LensPost key={index} userData={user} userProfilePic={profilePicture} />;
                  })}
                {loadingUserPosts && <Spinner />}
                <div ref={observerRef} className="loading-indicator">
                  {hasMore && !loadingUserPosts && <Spinner />}
                </div>
              </>
            )}

            {/* Lens - Follower's Posts */}
            {menu === "/Other's Lens" && (
              <>
                {loadingFollowersPosts ? (
                  <Spinner />
                ) : (
                  Object.keys(followersPosts).map(userId => {
                    const userData = followersPosts[userId];
                    return userData.map((user, index) => {
                      return <LensPost key={index} userData={user} userProfilePic={profilePicture} />;
                    });
                  })
                )}
              </>
            )}

            {/* Mirror Posts */}
            {menu === "/Mirror" && (
              <>
                {loadingMirrorPosts ? (
                  <Spinner />
                ) : (
                  mirrorPosts.map((post, index) => {
                    return <MirrorPost key={index} post={post} userProfilePic={profilePicture} />;
                  })
                )}
              </>
            )}
          </div>

          <div className="rightSection">
            <div className="requestWidget">
              <h3>Requests</h3>
              <div className="requestProfile">
                <div className="details">
                  <div className="profileImage">
                    <img src={"/assets/avatar_default.jpg"} alt="" />
                  </div>
                  <div className="userDetails">
                    <div className="name">Sophie Alexander</div>
                    <div className="username">@johndoe</div>
                  </div>
                </div>
                <div className="actions">
                  <button className="actionBtn">Accept</button>
                  <button className="actionBtn">Reject</button>
                </div>
              </div>
              <div className="requestProfile">
                <div className="details">
                  <div className="profileImage">
                    <img src={"/assets/avatar_default.jpg"} alt="" />
                  </div>
                  <div className="userDetails">
                    <div className="name">Phillip Tønder</div>
                    <div className="username">@philipTonder</div>
                  </div>
                </div>
                <div className="actions">
                  <button className="actionBtn">Accept</button>
                  <button className="actionBtn">Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
