import React, { SetStateAction } from "react";
import { Dispatch } from "react";
import Link from "next/link";
import { LensProfile } from "../types/utils";
import { FaCompass, FaHome, FaWallet } from "react-icons/fa";
import { getIpfsUrl } from "~~/utils/ipfs/getIpfsUrl";

const links = [
  {
    name: "Your Lens",
    icon: <FaHome />,
  },
  {
    name: "Other's Lens",
    icon: <FaCompass />,
  },
  {
    name: "Mirror",
    icon: <FaWallet />,
  },
];

type SidebarProps = {
  userMetadata: LensProfile | null;
  setMenu: Dispatch<SetStateAction<string>>;
};

const Sidebar: React.FC<SidebarProps> = ({ userMetadata, setMenu }) => {
  const profileImageSrc = userMetadata?.picture ? getIpfsUrl(userMetadata.picture) : "/assets/avatar_default.jpg";

  return (
    <div className="leftSection">
      <div className="userProfileWidget">
        <div className="profileImage">
          <img src={profileImageSrc} alt="" />
        </div>
        <div className="userDetails">
          <Link href={"/Profile"} className="name">
            {userMetadata?.name}
          </Link>
          <div className="username">{userMetadata?.bio}</div>
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

      {/* <button className="inBtn sidebarCreateBtn w-full" onClick={() => setIsMirrorDSP(prev => !prev)}>
        {isMirrorDSP ? "Lens" : "Mirror"}
      </button> */}
    </div>
  );
};

export default Sidebar;
