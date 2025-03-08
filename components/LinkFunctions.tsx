"use client";

import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import lfh from "@/styles/Header.module.scss";


interface TranstionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}

function Sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink  = ({
    children, 
    href, 
    ...props
}: TranstionLinkProps) => {

    const pathname = usePathname();
    const router = useRouter();

    const isActive = pathname === href;
    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("page-transition");

        await Sleep(400);
        router.push(href);
        await Sleep(400);

        body?.classList.remove("page-transition");
    }

    return (
        <Link href={href} {...props} onClick={handleTransition} className={`${lfh.hb} ${isActive ? lfh.active : ""}`}>
            {children}
        </Link>
    )
}