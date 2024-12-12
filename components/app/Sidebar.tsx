"use client";

import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaChartPie } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const adminLinks = [
  {
    id: 1,
    name: "Dashboard",
    link: "/admin/dashboard",
    icon: <FaChartPie size={24} className="group-hover:text-brown" />,
  },
  {
    id: 2,
    name: "Users",
    link: "/admin/user",
    icon: <FaUserFriends size={24} className="group-hover:text-brown" />,
  },
  {
    id: 3,
    name: "Products",
    link: "/admin/products",
    icon: <AiFillProduct size={24} className="group-hover:text-brown" />,
  },
  {
    id: 4,
    name: "Analytics",
    link: "/admin/analytics",
    icon: <IoMdAnalytics size={24} className="group-hover:text-brown" />,
  },
];

const bottomLinks = [
  {
    id: 5,
    name: "Settings",
    link: "/admin/settings",
    icon: <IoSettingsSharp size={24} className="group-hover:text-brown" />,
  },
  {
    id: 6,
    name: "Logout",
    link: "/sign-in",
    icon: <TbLogout size={24} className="group-hover:text-brown" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname(); // Get the current path
  const router = useRouter(); // For navigation

  return (
    <div className="w-[20%] sticky max-lg:w-[15%] bg-brown left-0 top-0 p-10 flex flex-col justify-between max-lg:p-2 h-screen">
      {/* Top Section */}
      <div>
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <Image
            src={logo}
            alt="logo"
            className="max-lg:w-14 max-lg:h-14 max-sm:w-10 max-sm:h-10 w-20 h-20"
          />
          <h4 className="text-xl text-black font-medium max-lg:hidden max-xl:text-lg">
            JIVAH COLLECTIONS
          </h4>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-3">
          {adminLinks.map((link) => (
            <li
              key={link.id}
              className={`flex group items-center gap-4 px-4 py-4 rounded-lg cursor-pointer transition-all duration-300 ${
                pathname === link.link
                  ? "bg-white text-brown"
                  : pathname.startsWith(link.link) 
                  ? "bg-white text-brown"
                  : "text-white hover:bg-white hover:text-brown"
              }`}
              onClick={() => router.push(link.link)}
            >
              <span
                className={`transition-colors duration-300 ${
                  pathname === link.link || pathname.startsWith(link.link)
                    ? "text-brown"
                    : "text-white"
                }`}
              >
                {link.icon}
              </span>
              <span className="text-lg font-medium max-lg:text-sm max-lg:hidden">
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div>
        <ul className="flex flex-col gap-3">
          {bottomLinks.map((link) => (
            <li
              key={link.id}
              className={`flex group items-center gap-4 px-4 py-4 rounded-lg cursor-pointer transition-all duration-300 ${
                pathname === link.link
                  ? "bg-white text-brown"
                  : "text-white hover:bg-white hover:text-brown"
              }`}
              onClick={() => router.push(link.link)}
            >
              <span
                className={`transition-colors duration-300 ${
                  pathname === link.link ? "text-brown" : "text-white"
                }`}
              >
                {link.icon}
              </span>
              <span className="text-lg font-medium max-lg:text-sm max-lg:hidden">
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
