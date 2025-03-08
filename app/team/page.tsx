"use client";

import { useDocumentTitle } from "@/components/Tab_Title";

interface MyPageProps {
  pageTitle: string;
}

import Image from "next/image";
import ts from "@/styles/Team.module.scss";
import RandomImg from "@/components/Random_Image";

const team_data = {
    executive_members: [
        { name: "Rostom Halouane", role: "Director", img: "/tp_imgs/tp_elec_imgs/Rostom_headshot.png" },
        { name: "Tanveer Parhar" , role: "Director", img: "/tp_imgs/tp_elec_imgs/Tanveer_headshot.png"},
    ],
    electrical_members: [
        { name: "Spencer Bruke", role: " ", img: "/tp_imgs/tp_elec_imgs/Spencer_headshot.png" },
        { name: "Anthony Truong", role: " ", img: "/tp_imgs/tp_elec_imgs/Anthony_headshot.png" },
        { name: "Matin Nabizadeh", role: " ", img: "/tp_imgs/tp_elec_imgs/Matin_headshot.png" },
        { name: "Temuulen Ankhbayar", role: " ", img: "/tp_imgs/tp_elec_imgs/Tem_headshot.png" },
        { name: "Ibrahim Khalid", role: " ", img: "/tp_imgs/tp_elec_imgs/Ibrahim_headshot.png" },
        { name: "Shaheer Mansoor", role: " ", img: "/tp_imgs/tp_elec_imgs/Shaheer_headshot.png" },
        { name: "Zarak Salim", role: " ", img: "/tp_imgs/tp_elec_imgs/Zarak_headshot.png" },
        { name: "Nadithi Tissera", role: " ", img: "/tp_imgs/tp_elec_imgs/Nadithi_headshot.png" },
    ],
    mechanical_members: [
        { name: "Qasim Chaudhary", role: " ", img: "/tp_imgs/tp_mech_imgs/Qasim_headshot.png" },
        { name: "Luis Chacon", role: " ", img: "/tp_imgs/tp_mech_imgs/Luis_headshot.png" },
        { name: "EJ Hallado", role: " ", img: "/tp_imgs/tp_mech_imgs/EJ_headshot.png" },
        { name: "Masroor Mamoon", role: " ", img: "/tp_imgs/tp_mech_imgs/Masroor_headshot.png" },
        { name: "Aldrich Varghees", role: " ", img: "/tp_imgs/tp_mech_imgs/Aldrich_headshot.png" },
        { name: "Matei Djukic", role: " ", img: "/tp_imgs/tp_mech_imgs/Matei_headshot.png" },
        { name: "Kassem Jarrah", role: " ", img: "/tp_imgs/tp_mech_imgs/Kassem_headshot.png" },
    ],
    software_members: [
        { name: "Siem Debesay", role: " ", img: "/tp_imgs/tp_soft_imgs/Siem_headshot.png" },
        { name: "Usman Mahmood", role: " ", img: "/tp_imgs/tp_soft_imgs/Usman_headshot.png" },
        { name: "Mellisa Phongsa", role: " ", img: "/tp_imgs/tp_soft_imgs/Mellisa_headshot.png" },
        { name: "Matthew Liu", role: " ", img: "/tp_imgs/tp_soft_imgs/Matthew_headshot.png" },
        { name: "Austin Bach", role: " ", img: "/tp_imgs/tp_soft_imgs/Austin_headshot.png" },
    ],
    business_members: [
        { name: "Muhammed Rafiuzzaman", role: "", img: "/tp_imgs/tp_bus_imgs/Rafi_headshot.png" },
        { name: "Marya Rachdi", role: "", img: "/tp_imgs/tp_bus_imgs/Marya_headshot.png" },
        { name: "Kawthar Aroua", role: " ", img: "/tp_imgs/tp_bus_imgs/Kawthar_headshot.png" },
        { name: "Tirta Kusjanto", role: " ", img: "/tp_imgs/tp_bus_imgs/Tirta_headshot.png" },
        { name: "Moyo Adeyemi", role: " ", img: "/tp_imgs/tp_bus_imgs/Moyo_headshot.png" },

    ]
}

interface Team_Member {
    name: string;
    role: string;
    img: string;
}
interface Team_Section_Item {
    title: string;
    members: Team_Member[];
}

const Team_Section: React.FC<Team_Section_Item> = ({ title, members }) => {
    return (
        <div className={ts.team}>
            <h2 className={ts.t_title2}>{title}</h2>
            <div className={ts.t_members}>
                {members.map((member, index) => (
                    <div key={index} className={ts.t_member}>
                        <Image
                            src={member.img}
                            alt={member.name}
                            width={1500}
                            height={1500}
                            className={ts.t_member_img}
                        />
                        <h3 className={ts.t_member_name}>{member.name}</h3>
                        <p className={ts.t_member_role}>{member.role}</p>
                    </div>
                ))}
            </div>
            <p className={ts.member_break}> BREAK - DONT TOUCH </p>
        </div>
    )
}

export default function Team({ pageTitle = "ReVOLT: Team" }: MyPageProps) {
    useDocumentTitle(pageTitle);

    return (
        <div className={ts.team_main}>
            <div className={ts.top}> TOP SPACE - DONT TOUCH</div>

            <div className={ts.t_picture}>
                <h1 className={ts.t_title1}>THE ReVOLT TEAM</h1>
                <div className={ts.t_img_container}>
                    <RandomImg />
                </div>
            </div>

            <p className={ts.break}> BREAK - DONT TOUCH </p>
            <Team_Section title="Executives" members={team_data.executive_members} />
            <Team_Section title="Electrical Team" members={team_data.electrical_members} />
            <Team_Section title="Mechanical Team" members={team_data.mechanical_members} />
            <Team_Section title="Software Team" members={team_data.software_members} />
            <Team_Section title="Business Team" members={team_data.business_members} />
            <div className={ts.bottom}>BOTTOM SPACE - DONT TOUCH</div>
        </div>
    )
}