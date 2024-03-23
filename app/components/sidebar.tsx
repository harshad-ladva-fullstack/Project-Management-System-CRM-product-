"use client";

import Logo from "./logo";

export default function Sidebar() {
  return (
    <div className="flex-3 h-screen bg-[#F9FAFC] w-1/12 text-center flex-col border-r-slate-200">
      <Logo
        className="flex justify-center p-4 mt-3 hover:cursor-pointer"
        size="md"
        logo="/assets/logo.svg"
      ></Logo>
      <Logo
        className="flex justify-center hover:cursor-pointer p-4 mt-6"
        size="md"
        logo="/assets/home.svg"
      ></Logo>
      <Logo
        className="flex justify-center hover:cursor-pointer p-4"
        size="md"
        logo="/assets/folder.svg"
      ></Logo>
      <Logo
        className="flex justify-center hover:cursor-pointer p-4"
        size="md"
        logo="/assets/calendar.svg"
      ></Logo>
      <Logo
        className="flex justify-center hover:cursor-pointer p-4"
        size="md"
        logo="/assets/bars.svg"
      ></Logo>
      <Logo
        className="flex justify-center hover:cursor-pointer p-4"
        size="md"
        logo="/assets/message.svg"
      ></Logo>
      <Logo
        className="flex justify-center hover:cursor-pointer p-4"
        size="md"
        logo="/assets/people.svg"
      ></Logo>
      <Logo
        className="flex justify-center hover:cursor-pointer p-4"
        size="md"
        logo="/assets/setting.svg"
      ></Logo>
    </div>
  );
}
