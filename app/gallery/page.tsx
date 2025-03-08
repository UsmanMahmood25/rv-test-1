"use client";

import React from "react";
import UnderDevelopment from "@/components/Under_Devlopment";
import { useEffect } from "react";

interface MyPageProps {
  pageTitle?: string;
}

export default function Gallery({ pageTitle = "ReVOLT: Gallery" }: MyPageProps) {
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle; // This updates the tab title dynamically
    }
  }, [pageTitle]);

    return (
        <UnderDevelopment />
    )
}