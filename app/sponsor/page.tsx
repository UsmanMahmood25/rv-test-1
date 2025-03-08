"use client";

import { useDocumentTitle } from "@/components/Tab_Title";
import UnderDevelopment from "@/components/Under_Devlopment";

interface MyPageProps {
  pageTitle?: string;
}

export default function Sponsor({ pageTitle }: MyPageProps) {
    useDocumentTitle(pageTitle);

    return (
        <UnderDevelopment />
    )
}