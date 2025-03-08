"use client";

import { useDocumentTitle } from "@/components/Tab_Title";

interface MyPageProps {
  pageTitle?: string;
}

export default function Memeber({ pageTitle }: MyPageProps) {
    useDocumentTitle(pageTitle);

    return (
        <p>Staff Only</p>
    )
}