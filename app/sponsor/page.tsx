
// import UnderDevelopment from "@/components/Under_Devlopment";

import Image from "next/image";
import React from "react";
import { PDF_Download, PDF_Preview, BusinessTeam } from "@/components/PDF_Functions";
import { PopInSection } from "@/components/Div_Popin";
import ss from "@/styles/Sponsor.module.scss";

export default function Sponsor() {

    return (
        <main>
            <div className={ss.img_container}>
                <BusinessTeam />
            </div>

            <div className={ss.pkg_container}>
                <div className={ss.pkg_preview}>
                    <PDF_Preview />
                </div>
                <div className={ss.pdf_dwnld}>
                    <PDF_Download />
                </div>
            </div>

            <div className={ss.sponsor_lvls}>
                <div className={ss.s_header}>
                    <h1 className={ss.s_h_text}> SPONSORS</h1>
                </div>

                    {/* Template to Insert Images */}
                    {/* <Image src='' alt='' sizes={'150vw'} width={0} height={0} style={{}} /> */}

                <div className={ss.sponsor_class}>
                    <PopInSection>
                    <div className={ss.diamond}>
                        <h1>DIAMOND</h1>
                        <div>
                            <Image src='/hp_imgs/sponsors/2.png' alt='UCalgary' sizes={'150vw'} width={0} height={0} style={{ width: '32.5vw', height: 'auto', marginRight: '5vw' }} />                             
                            <Image src='/hp_imgs/sponsors/august_electronics_logo.png' alt='UCalgary' sizes={'150vw'} width={0} height={0} style={{ width: '39.5vw', height: 'auto' }} /> 
                        </div>
                    </div>
                    </PopInSection>

                    <PopInSection>
                    <div className={ss.gold}>
                        <h1>GOLD</h1>
                        <div>
                            <Image src='/hp_imgs/sponsors/cnooc_logo.png' alt='UCalgary' sizes={'150vw'} width={0} height={0} style={{ width: '32.5vw', height: 'auto' }} /> 
                        </div>
                    </div>
                    </PopInSection>

                    <PopInSection>
                    <div className={ss.silver}>
                        <h1>SILVER</h1>
                        <div>
                            <Image src='/hp_imgs/sponsors/protocase_logo.png' alt='UCalgary' sizes={'150vw'} width={0} height={0} style={{ width: '22.5vw', height: 'auto' }} /> 
                        </div>
                    </div>
                    </PopInSection>

                    <PopInSection>
                    <div className={ss.bronze}>
                        <h1>BRONZE</h1>
                        <div>
                            <Image src='/hp_imgs/sponsors/onshape_logo.png' alt='OnShape' sizes={'150vw'} width={0} height={0} style={{ width: '35vw', height: 'auto', padding: '1.5vw' }} />
                            <Image src='/hp_imgs/sponsors/altium_logo_blk.png' alt='UCalgary' sizes={'150vw'} width={0} height={0} style={{ width: '22.5vw', height: 'auto' }} /> 
                        </div>
                    </div>
                    </PopInSection>
                </div>
            </div>
            
        </main>
    )
}