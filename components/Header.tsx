"use client";

import { TransitionLink } from "./LinkFunctions";
import { CopyLinkHeader } from "./CopyLink";
import SideBar from "./Header_SideBar";
import Image from "next/image";
import Link from "next/link";
import hs from "@/styles/Header.module.scss"

export default function Header() {

  return (
    <div className={hs.header}>

      <div className={hs.h_img_container}>
        <div className={hs.h_img}>
          <div className={hs.h_img_box}>
            <Image
              width={200}
              height={50}
              src="/revolt_logo_invert.png"
              alt="ReVOLT EV Logo"
              className={hs.responsive_img}
            />
          </div>
        </div>
      </div>

      <div className={hs.menu_links}>
        <TransitionLink href="/">Home</TransitionLink>
        <TransitionLink href="/team">Team</TransitionLink>
        <TransitionLink href="/vehicles">Vehicles</TransitionLink>
        <TransitionLink href="/sponsor">Sponsor</TransitionLink>
      </div>

      <div className={hs.h_socials}>
        {/* Uofc SU Link */}
        <Link href="https://suuofc.campuslabs.ca/engage/organization/revoltev" target="_blank" rel="noopener noreferrer">
          <Image
              src="/icons/uofc_icon.png"
              alt="UofC SU Icon"
              width={20}
              height={20}
              className={hs.si}
          />
        </Link>

        {/* Gmail Copy Link */}
        <CopyLinkHeader/>

        {/* Instagram Link */}
        <Link href="https://www.instagram.com/revolt.ev_/?hl=en" target="_blank" rel="noopener noreferrer">
          <Image
              src="/icons/instagram_icon.png"
              alt="Instagram Icon"
              width={20}
              height={20}
              className={hs.si}
          />
        </Link>

        {/* LinkedIn Link */}
        <Link href="https://www.linkedin.com/company/revolt-ev/about/" target="_blank" rel="noopener noreferrer">
          <Image
              src="/icons/linkedin_icon.png"
              alt="LinkedIn Icon"
              width={20}
              height={20}
              className={hs.si}
          />
        </Link>
      </div>

      <div className={hs.h_side}>
        <SideBar />
      </div>

    </div>
  );
}

