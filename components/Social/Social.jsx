import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/shbhuiyan" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sakhawat-hossen997" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/its.bhuiyan997" },
  // { icon: <FaTwitter />, path: "" },
];

const Social = () => {
  return (
    <div className="flex gap-6 items-center">
      {socials.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.path}
            target="_blank"
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {" "}
            {item.icon}{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
