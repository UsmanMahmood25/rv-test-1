
import Link from "next/link"
import Image from "next/image"
import clf from "@/styles/Footer.module.scss";
import clh from "@/styles/Header.module.scss";

export const CopyLinkHeader: React.FC = () => {
    
    const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const link = "revoltevclub@gmail.com";

        navigator.clipboard.writeText(link)
            .then(() => alert("Email Copied to Clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    }

    return (
        <Link href="revoltevclub@gmail.com" onClick={handleCopy}>
            <Image 
                width={100}
                height={100}
                src="/icons/gmail_icon.png" 
                alt="Gmail Icon"
                className={clh.si}
            />
        </Link>
    )
}

export const CopyLinkFooter: React.FC = () => {
    
    const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const link = "revoltevclub@gmail.com";

        navigator.clipboard.writeText(link)
            .then(() => alert("Email Copied to Clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    }

    return (
        <Link href="revoltevclub@gmail.com" onClick={handleCopy}>
            <Image 
                width={100}
                height={100}
                src="/icons/gmail_icon.png" 
                alt="Gmail Icon"
                className={clf.si}
            />
        </Link>
    )
}