"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import pdfss from "@/styles/PDF_Function.module.scss";
import ss from "@/styles/Sponsor.module.scss";

const pdfFile: string = "/revolt_sponsorship_package.pdf";

export const PDF_Download: React.FC = () => {
  const openInNewTab = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <div className={pdfss.button}>
      <button className={pdfss.b_style} onClick={openInNewTab}>
        Sponsorship Package
      </button>
    </div>
  );
};

export const PDF_Preview: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className={`${pdfss.preview} ${isReady ? pdfss.loaded : ""}`}>
      <Image
        src="/sp_imgs/pkg_imgs/pg1.png"
        alt="PDF Preview"
        width={1500}
        height={1500}
        className={pdfss.pdf_pre_img}
      />
    </div>
  );
};

export const BusinessTeam: React.FC = () => {
  
  return (
    <div className={ss.img_child_contain}>
      <Image 
          src="/sp_imgs/business_team_photo.png"
          alt="Business Team Pic"
          width={1500}
          height={1500}
          className={ss.img_style}
      />
    </div>
  )
}
