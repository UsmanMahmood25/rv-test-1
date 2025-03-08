"use client";

import Home_Main from "./home/page";
import { useEffect } from "react";

interface MyPageProps {
  pageTitle?: string;
}

export default function Home({ pageTitle = "ReVOLT: Home" }: MyPageProps) {
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle; // This updates the tab title dynamically
    }
  }, [pageTitle]);
  
  return (
    <Home_Main />
  );
}
