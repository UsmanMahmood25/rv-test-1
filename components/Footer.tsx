'use client';

import Link from "next/link";
import Image from "next/image";
import { CopyLinkFooter } from "./CopyLink";
import fs from "@/styles/Footer.module.scss";

export default function Footer() {
    return (
        <div className={fs.footer}>
            <div className={fs.f_img}>
                <Image
                    width={100}
                    height={75}
                    src="/revolt_logo.png"
                    alt="ReVOLT EV Logo"
                    className={fs.res_img}
                    priority
                />
            </div>
            <div className={fs.f_text}>
                <p className={fs.fts}>2500 University Dr NW, Calgary</p>
                <p className={fs.fts}>Copyright © 2024 ReVOLT EV</p>
                <p className={fs.fts}>All rights reserved</p>
            </div>
            <div className={fs.f_socials}>
                {/* Uofc SU Link */}
                <Link href="https://suuofc.campuslabs.ca/engage/organization/revoltev" target="_blank" rel="noopener noreferrer">
                    <Image
                        width={100}
                        height={100}
                        src="/icons/uofc_icon.png"
                        alt="UofC SU Icon"
                        className={fs.si}
                    />
                </Link>

                {/* Gmail Copy Link */}
                <CopyLinkFooter/>

                {/* Instagram Link */}
                <Link href="https://www.instagram.com/revolt.ev_/?hl=en" target="_blank" rel="noopener noreferrer">
                    <Image
                        width={100}
                        height={100}
                        src="/icons/instagram_icon.png"
                        alt="Instagram Icon"
                        className={fs.si}
                    />
                </Link>

                {/* LinkedIn Link */}
                <Link href="https://www.linkedin.com/company/revolt-ev/about/" target="_blank" rel="noopener noreferrer">
                    <Image
                        width={100}
                        height={100}
                        src="/icons/linkedin_icon.png"
                        alt="LinkedIn Icon"
                        className={fs.si}
                    />
                </Link>
            </div>
        </div>
    )
}