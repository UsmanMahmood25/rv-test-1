"use client";

import Image from "next/image";
import { WhatWeDo, PictureSlider, images } from "./HomeFunctions";
// import { BikeMain } from "@/components/Bike_Models";
import home_style from "@/styles/Home.module.scss";

export default function Home_Main() {
    return (
        <main>

            <div className={home_style.home_pg_header}>
                {/* <div className={home_style.bike_model}>
                    <BikeMain />
                </div> */}
                <div className={home_style.h_pg_h_text}>
                    <div className={home_style.reg_text_1}>
                        <p className={home_style.reg_text_1_1}> 
                            We are
                        </p>
                    </div>
                    <div className={home_style.large_text}>
                        <p className={home_style.large_text_1}> 
                            ReVOLT
                        </p>
                    </div>
                    <div className={home_style.reg_text_2}>
                        <p className={home_style.reg_text_2_1}> 
                            University of Calgary
                        </p>
                    </div>
                </div>
            </div>

            <div className={home_style.who_we_are}>
                <div className={home_style.wwa_header}> 
                    <h1 className={home_style.wwa_h_text}>WHO WE ARE</h1>
                </div>
                <div className={home_style.wwa_content}>
                    <div className={home_style.wwa_c_text}>
                        <ul className={home_style.wwa_c_list}>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                    We are ReVOLT EV, a design team based in the university of Calgary focused on the development and innovation of EV vehicles.
                                </p>
                            </li>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                    Our first project transforms a motorcycle from gas to electric power, blending restoration with cutting-edge modernization.
                                </p>
                            </li>
                            <li className={home_style.wwa_c_l_style}>
                                <p className={home_style.wwa_c_t_style}>
                                   The finished motorcycle will be tested in a racing competition, with the event occuring this comming June.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={home_style.wwa_c_video}>
                        <iframe className={home_style.wwa_c_v_part}
                            src="https://www.youtube-nocookie.com/embed/5wKvSOgbchs?autoplay=1&mute=0&playlist=5wKvSOgbchs&loop=0&controls=1">     
                        </iframe>
                    </div>
                </div>
            </div>

            <div className={home_style.what_we_do}>
                <div className={home_style.wwd_content}>
                    <WhatWeDo />
                </div>
                <div className={home_style.wwd_pictures}>
                    <PictureSlider images={ images } />
                </div>
            </div>

            <div className={home_style.planned_comp}>
                <div className={home_style.pc_header}> 
                    <h1 className={home_style.pc_h_text}>PLANNED COMPETITIONS</h1>
                </div>

                {/* <div className={home_style.pc_main_text}>
                    <div className={home_style.pc_m_text}>
                        <h2>AHRMA eMoto Varsity 2025</h2>
                        <ul className={home_style.pc_m_list}>
                            <li>
                                <p>Racing against other universities and private teams.</p>
                            </li>
                            <li>
                                <p>Competing to race fastest lap possible on the New Jersey Motorsports Park.</p>
                            </li>
                            <li>
                                <p>Evaluated for technical proficiency by motor experts.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={home_style.pc_m_img}>
                        <Image src="/h_pg_images/AHRMA_logo.png" alt="AHRMA Image" width={0} height={0} sizes="100vw" style={{ width: '42.5vw', height: 'auto', }} />
                    </div>
                </div> */}


                {/* Temporary Place Holder (No Planned Competitions) */}

                <div className={home_style.pc_temp}>
                    <p className={home_style.pc_t_text}> To Be Announced </p>
                </div>

            </div>

            <div className={home_style.sponsors}>
                <div className={home_style.s_header}>
                    <h1 className={home_style.s_h_text}> SPONSORS</h1>
                </div>
                <div className={home_style.s_images}>

                    {/* Template to Insert Images */}
                    {/* <Image src='' alt='' sizes={'150vw'} width={0} height={0} style={{}} /> */}

                    <Image src='/hp_imgs/sponsors/onshape_logo.png' alt='OnShape' sizes={'150vw'} width={0} height={0} style={{ width: '50vw', height: 'auto', padding: '1.5vw' }} />
                    <Image src='/hp_imgs/sponsors/ucalg_schulich_logo.png' alt='UCalgary' sizes={'150vw'} width={0} height={0} style={{ width: '35vw', height: 'auto', paddingRight: '1.5vw', paddingLeft: '1.5vw', paddingBottom: '2.75vw' }} /> 
                    
                </div>
            </div>

            

        </main>
    );
};