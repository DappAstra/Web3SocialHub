"use client";

import { useState } from "react";
// import userData from "./UserData";
import { useClickOutside } from "@mantine/hooks";
import type { NextPage } from "next";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdEmojiEmotions, MdInsertPhoto } from "react-icons/md";
import Navbar from "~~/components/Navbar";
import PostReal from "~~/components/PostReal";
import Sidebar from "~~/components/Sidebar";
import { useFollowersPosts } from "~~/hooks/graphQL/useFollowersPosts";
import { useUserFollowers } from "~~/hooks/graphQL/useUserFollowers";
import { useUserMetadata } from "~~/hooks/graphQL/useUserMetadata";
import { useUserPosts } from "~~/hooks/graphQL/useUserPosts";

const Home: NextPage = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>("/Explore");
  const ref = useClickOutside(() => setIsFocused(false));

  const { userMetadata, loading: loadingUserMetadata } = useUserMetadata(1);
  const { userPosts } = useUserPosts();
  const { followers } = useUserFollowers();
  const { followersPosts } = useFollowersPosts(followers);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-2">
        <Navbar userMetadata={userMetadata} />
        <div className="mainContainer">
          <Sidebar userMetadata={userMetadata} setMenu={setMenu} />

          <div className="mainSection">
            {/* <div className="storiesWrapper">
              <div className="storiesWidget">
                {userData.map((user, index) => {
                  return (
                    <div className="story" key={index}>
                      <div className="overlay"></div>
                      <img src={`${user.storyImage}`} alt="" />
                      <img src={`${user.profilePic}`} alt="" className="profileImage" />
                      <div className="name">{user.name}</div>
                    </div>
                  );
                })}
              </div>
            </div> */}

            {!loadingUserMetadata && (
              <div ref={ref} className={`createPostWidget ${isFocused ? "active" : ""}`}>
                <div className="createInput">
                  <img src="/assets/avatar_default.jpg" alt="" />
                  <input
                    type="text"
                    placeholder={`What's on your mind, ${userMetadata?.name}?`}
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
            )}

            {menu === "/Home" &&
              userPosts.map((user, index) => {
                return <PostReal key={index} userData={user} userProfilePic="/assets/avatar_default.jpg" />;
              })}
            {menu === "/Explore" &&
              Object.keys(followersPosts).map(userId => {
                const userData = followersPosts[userId];
                return userData.map((user, index) => {
                  return <PostReal key={index} userData={user} userProfilePic="/assets/avatar_default.jpg" />;
                });
              })}
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
                    <img
                      src={
                        "https://images.unsplash.com/photo-1505695716405-61e75ecc5bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                      }
                      alt=""
                    />
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
