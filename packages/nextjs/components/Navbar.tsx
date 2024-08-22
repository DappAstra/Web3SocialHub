"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LensProfile } from "../types/utils";
import { useClickOutside } from "@mantine/hooks";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown, FaFaceFrown } from "react-icons/fa6";
import { MdClose, MdSearch, MdSettings } from "react-icons/md";
import { RiQuestionFill } from "react-icons/ri";
import userData, { UserData } from "~~/app/UserData";

type NavbarProps = {
  userMetadata: LensProfile | null;
};

const Navbar: React.FC<NavbarProps> = ({ userMetadata }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useClickOutside(() => setIsFocused(false));
  const [searchValue, setSearchValue] = useState<string>("");
  const [ProfileMenu, setProfileMenu] = useState<boolean>(false);
  const [searchedUser, setSearchedUser] = useState<UserData[]>(userData);
  const [searchPanel, setSearchPanel] = useState<boolean>(false);

  const searchUsers = (value: string) => {
    const searchedUser = userData.filter(user => {
      return user.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedUser(searchedUser.length === 0 ? [{ error: "User Not Found" }] : searchedUser);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    searchUsers(e.target.value);
  };

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    searchUsers((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest(".userProfile")) {
        setProfileMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="inNavbar">
        <Link href={"/"} className="inLogo">
          Web3Socials
        </Link>
        <div ref={ref} className={`inSearch ${isFocused ? "inSearchFocused" : ""}`}>
          <div className="inSearchWrapper">
            <div className="inSearchIcon">
              <MdSearch className="inIcon" />
            </div>
            <input
              type="text"
              onClick={() => setIsFocused(true)}
              placeholder="Search"
              value={searchValue}
              onFocus={() => setIsFocused(true)}
              onChange={handleInputChange}
              onKeyUp={handleInputKeyUp}
            />
            <div className={`inSearchCloseBtn ${searchValue.length >= 1 ? "inSearchCloseBtnActive" : ""}`}>
              <MdClose
                className="inIcon"
                onClick={() => {
                  setSearchValue("");
                  setIsFocused(false);
                  setTimeout(() => {
                    setSearchedUser(userData);
                  }, 300);
                }}
              />
            </div>
          </div>

          <motion.div
            className="searchResult"
            initial={{ y: 30, opacity: 0, pointerEvents: "none" }}
            animate={{
              y: isFocused ? 0 : 30,
              opacity: isFocused ? 1 : 0,
              pointerEvents: isFocused ? "auto" : "none",
            }}
          >
            {isFocused &&
              searchedUser.map((user, index) => {
                if (user.error) {
                  return (
                    <div className="noUserFound" key={index}>
                      <FaFaceFrown />
                      <h3>Sorry {user.error}</h3>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="searchResultItem" onClick={() => setSearchValue(user.name || "")}>
                      <div className="userImage">
                        <img src={`${user.profilePic}`} alt="" />
                      </div>
                      <h3>{user.name}</h3>
                    </div>
                  );
                }
              })}
          </motion.div>
        </div>
        <div className="inNavRightOptions">
          <div className="mobileSearchBtn" onClick={() => setSearchPanel(true)}>
            <MdSearch />
          </div>
          {/* <label className="inBtn" htmlFor="createNewPost">
            Create
          </label> */}
          <div className="userProfile">
            <div className="userImage" onClick={() => setProfileMenu(!ProfileMenu)}>
              <img src={"/assets/avatar_default.jpg"} alt="User Profile Pic" />
            </div>
            <motion.div
              className="userProfileDropdown"
              initial={{ y: 40, opacity: 0, pointerEvents: "none" }}
              animate={{
                y: !ProfileMenu ? -30 : [0, 30, 10],
                opacity: ProfileMenu ? 1 : 0,
                pointerEvents: ProfileMenu ? "auto" : "none",
                zIndex: 999999,
              }}
              transition={{ duration: 0.48 }}
            >
              <div className="profileWrapper">
                <img src={"/assets/avatar_default.jpg"} alt="User Profile Pic" />
                <div className="profileData">
                  <div className="name">{userMetadata?.name}</div>
                  <span className="seeProfile">See Profile</span>
                </div>
              </div>
              <div className="linksWrapper">
                <div className="link">
                  <div className="leftSide">
                    <span className="icon">
                      <MdSettings />
                    </span>
                    <span className="name">Settings & Privacy</span>
                  </div>
                  <span className="actionIcon">
                    <FaAngleRight />
                  </span>
                </div>
                <div className="link">
                  <div className="leftSide">
                    <span className="icon">
                      <RiQuestionFill />
                    </span>
                    <span className="name">Help & Support</span>
                  </div>
                  <span className="actionIcon">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="mobileSearchPanel"
        initial={{ y: "100vh", pointerEvents: "none", display: "none" }}
        animate={{
          display: searchPanel ? "block" : "none",
          y: searchPanel ? 0 : "100vh",
          pointerEvents: searchPanel ? "auto" : "none",
          transition: {
            bounce: 0.23,
            type: "spring",
          },
        }}
      >
        <div className="closeBtn" onClick={() => setSearchPanel(false)}>
          <FaAngleDown />
        </div>

        <div className="inMobileSearch">
          <div className="mobileSearchIcon">
            <MdSearch className="inIcon" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onKeyUp={handleInputKeyUp}
            onChange={handleInputChange}
          />
          {searchValue.length >= 1 && (
            <MdClose
              className="inIcon cursor-pointer"
              onClick={() => {
                setSearchValue("");
                setSearchedUser(userData);
              }}
            />
          )}
        </div>

        <div className="mobileSearchResult">
          {searchedUser.map((user, index) => {
            if (user.error) {
              return (
                <div className="noUserFound" key={index}>
                  <FaFaceFrown />
                  <h3>Sorry {user.error}</h3>
                </div>
              );
            } else {
              return (
                <div
                  className="mobileSearchItem"
                  key={index}
                  onClick={() => {
                    setSearchValue(user.name || "");
                    setSearchPanel(false);
                  }}
                >
                  <div className="profileImage">
                    <img src={`${user.profilePic}`} alt="" />
                  </div>
                  <h3>{user.name}</h3>
                </div>
              );
            }
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
