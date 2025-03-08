"use client";

import Home_Main from "./home/page";
import { useDocumentTitle } from "@/components/Tab_Title";

interface MyPageProps {
  pageTitle?: string;
}

export default function Home({ pageTitle }: MyPageProps) {
  useDocumentTitle(pageTitle);
  
  return (
    <Home_Main />
  );
}
