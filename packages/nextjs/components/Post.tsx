import React, { useState } from "react";
import { UserData } from "../app/UserData";
import { motion } from "framer-motion";
import { FaEllipsisH } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { HiOutlineBookmark, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineHeart } from "react-icons/hi2";

type PostProps = {
  userData: UserData;
};

const Post: React.FC<PostProps> = ({ userData }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-xl mx-4 px-4 my-6">
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center">
            <img src={`${userData.profilePic}`} alt="" className="object-cover w-[2.8rem] h-[2.8rem] rounded-full" />
            <div className="ml-3">
              <div className="font-semibold text-gray-600 hover:text-primary cursor-pointer">{userData.name}</div>
              <div className="text-xs text-gray-600">is feeling happy with @johndoe</div>
            </div>
          </div>
          <div className="ml-3">
            <div className="text-gray-600 text-xl cursor-pointer">
              <FaEllipsisH />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.img
            src={userData.postImg}
            alt=""
            className="max-w-full max-h-[20rem] my-4 rounded-xl w-full h-full object-cover"
            onClick={() => setOpen(!open)}
            animate={{ scale: open ? 2 : 1 }}
          />
        </div>
        <div className="flex justify-between items-center my-3">
          <div className="flex justify-between items-center w-full mb-2">
            <div className="flex items-center">
              <div className="likeBtn">
                <HiOutlineHeart />
              </div>
              <div className="commentBtn">
                <HiOutlineChatBubbleOvalLeftEllipsis />
              </div>
              <div className="shareBtn">
                <HiOutlineShare />
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

export default Post;
