import Link from "next/link";

const SocialLinks = () => {
return (
    <ul>
        <li>
            <Link href={"https://www.instagram.com/daksharchitects/"} target="_blank" rel="noopener noreferrer">
                Instagram
            </Link>
            <Link href={"https://www.facebook.com/daksharchitects/"} target="_blank" rel="noopener noreferrer">
                Facebook
            </Link>
        </li>
        <li>
            <Link href={"https://www.linkedin.com/company/daksharchitects/"} target="_blank" rel="noopener noreferrer">
                LinkedIn
            </Link>
        </li>
    </ul>
)

}

export default SocialLinks;