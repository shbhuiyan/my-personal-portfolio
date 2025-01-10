import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = () => {
  return (
    <div className="flex gap-6 items-center">
      {socials.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.path}
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
