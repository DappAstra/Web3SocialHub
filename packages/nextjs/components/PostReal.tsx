import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEllipsisH } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { HiOutlineBookmark, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineHeart } from "react-icons/hi2";
import { Post } from "~~/types/utils";

type PostProps = {
  userData: Post;
  userProfilePic: string;
};

const linkifyText = (text: string) => {
  // Updated regex to match URLs and consider enclosing < > characters
  const urlRegex = /(<)?(https?:\/\/[^\s>]+)(>)?/g;

  return text.split(urlRegex).map((part, index) => {
    // Check if the part is a URL (and possibly enclosed in < >)
    if (part && part.match(/https?:\/\/[^\s>]+/)) {
      const cleanUrl = part.replace(/(^<|>$)/g, ""); // Remove enclosing < >
      return (
        <a key={index} href={cleanUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          {cleanUrl}
        </a>
      );
    }
    return part;
  });
};

const PostReal: React.FC<PostProps> = ({ userData, userProfilePic }) => {
  const [open, setOpen] = useState(false);

  // Function to convert IPFS link to HTTP gateway link
  const getIpfsUrl = (ipfsUrl: string) => {
    if (ipfsUrl.startsWith("ipfs://")) {
      return ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    return ipfsUrl; // In case it's already a valid URL
  };

  const imageUrl = getIpfsUrl(userData?.animation_url || "");

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-xl mx-4 px-4 my-6">
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center">
            <img src={userProfilePic} alt="" className="object-cover w-[2.8rem] h-[2.8rem] rounded-full" />
            <div className="ml-3">
              <div className="font-semibold text-gray-600 hover:text-primary cursor-pointer">
                {userData?.lens.appId}
              </div>
              <div className="text-xs text-gray-600">{userData?.name}</div>
            </div>
          </div>
          <div className="ml-3">
            <div className="text-gray-600 text-xl cursor-pointer">
              <FaEllipsisH />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-xs text-gray-600 whitespace-pre-wrap">{linkifyText(userData?.description || "")}</div>
        </div>
        <div className="flex justify-center">
          <motion.img
            src={imageUrl}
            alt=""
            className="max-w-full max-h-[20rem] my-4 rounded-xl w-full h-full object-cover"
            onClick={() => setOpen(!open)}
            animate={{ scale: open ? 2 : 1 }}
          />
        </div>
        <div className="flex justify-between items-center my-3">
          <div className="flex justify-center w-full mb-2">
            <div className="flex">
              <div className="likeBtn flex items-center text-gray-600 hover:text-red-700 cursor-pointer mr-4">
                <HiOutlineHeart className="mr-1" />
                <span>Like</span>
              </div>
              <div className="commentBtn flex items-center text-gray-600 hover:text-blue-700 cursor-pointer mr-4">
                <HiOutlineChatBubbleOvalLeftEllipsis className="mr-1" />
                <span>Comment</span>
              </div>
              <div className="shareBtn flex items-center text-gray-600 hover:text-green-700 cursor-pointer mr-4">
                <HiOutlineShare className="mr-1" />
                <span>Share</span>
              </div>
            </div>
            <div className="ml-3">
              <div className="saveBtn">
                <HiOutlineBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostReal;
