"use client";

import React from "react";
import { useDocumentTitle } from "@/components/Tab_Title";
import UnderDevelopment from "@/components/Under_Devlopment";

interface MyPageProps {
  pageTitle?: string;
}

export default function Gallery({ pageTitle = "ReVOLT: Gallery" }: MyPageProps) {
    useDocumentTitle(pageTitle);

    return (
        <UnderDevelopment />
    )
}