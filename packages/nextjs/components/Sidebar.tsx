import React, { SetStateAction } from "react";
import { Dispatch } from "react";
import Link from "next/link";
import { LensProfile } from "../types/utils";
import { FaBell, FaBookmark, FaBrush, FaCompass, FaEnvelope, FaHome } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const links = [
  {
    name: "Home",
    icon: <FaHome />,
  },
  {
    name: "Explore",
    icon: <FaCompass />,
  },
  {
    name: "Notifications",
    icon: <FaBell />,
  },
  {
    name: "Messages",
    icon: <FaEnvelope />,
  },
  {
    name: "Bookmarks",
    icon: <FaBookmark />,
  },
  {
    name: "Theme",
    icon: <FaBrush />,
  },
  {
    name: "Settings",
    icon: <MdSettings />,
  },
];

type SidebarProps = {
  userMetadata: LensProfile | null;
  setMenu: Dispatch<SetStateAction<string>>;
};

const Sidebar: React.FC<SidebarProps> = ({ userMetadata, setMenu }) => {
  return (
    <div className="leftSection">
      <div className="userProfileWidget">
        <div className="profileImage">
          <img src={"/assets/avatar_default.jpg"} alt="" />
        </div>
        <div className="userDetails">
          <Link href={"/Profile"} className="name">
            {userMetadata?.name}
          </Link>
          <div className="username">{`@${userMetadata?.id}`}</div>
        </div>
      </div>

      <div className="inSidebar">
        {links.map((link, index) => {
          return (
            <div className="link" key={index} onClick={() => setMenu(`/${link.name}`)}>
              <div className="icon">{link.icon}</div>
              <h3>{link.name}</h3>
            </div>
          );
        })}
      </div>

      {/* <label htmlFor="createNewPost" className="inBtn sidebarCreateBtn">
        Create Post
      </label> */}
    </div>
  );
};

export default Sidebar;
