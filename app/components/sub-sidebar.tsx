"use client";

import SearchBox from "./searchbox";

export default function Subsidebar() {
  return (
    <div className="pt-4 px-6 flex-2 w-3/12 border-r-[1px] border-slate-300">
      <h1 className="text-4xl mt-4">All Projects</h1>
      <SearchBox></SearchBox>
    </div>
  );
}
