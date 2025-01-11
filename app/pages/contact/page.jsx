"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1869 997 997",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shbhuiyan997@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Feni,Chittagong,Bangladesh.",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%]">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">Whether you have a project in mind, need a website, or just want to connect, feel free to reach out. I’m always excited to collaborate and bring ideas to life.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" name="FirstName" placeholder="First Name" />
                    <Input type="lastname" name="LastName" placeholder="Last Name" />
                    <Input type="email" name="email" placeholder="Email Address" />
                    <Input type="phone" name="phone" placeholder="Phone Number" />
                </div>
                <Textarea className="h-[200px]" placeholder="Type your massage here." />
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end mb-8 xl:mb-0">info</div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
