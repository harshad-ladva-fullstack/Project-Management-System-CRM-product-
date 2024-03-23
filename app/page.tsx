"use client";
import Container from "./components/container";
import Sidebar from "./components/sidebar";
import Subsidebar from "./components/sub-sidebar";
import useWidth from "./components/width";

export default function Home() {
  const getWindowsWidth = useWidth();

  return (
    <main>
      {getWindowsWidth < 800 ? (
        "Device is not supported to this device"
      ) : (
        <div className="flex flex-row h-full w-full">
          <Sidebar></Sidebar>
          <Subsidebar></Subsidebar>
          <Container></Container>
        </div>
      )}
    </main>
  );
}
