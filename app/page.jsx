import Social from "@/components/Social/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-20">
          {/* Text for banner */}
          <div className="text-center lg:text-left">
            <span className="text-xl">Frontend Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Sakhawat Hossen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a passionate Frontend Web Developer specializing in React.js, JavaScript, and responsive design.
            </p>

            {/* btn and social */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social />
              </div>
            </div>

          </div>

          {/* photo for banner */}
          <div className="">image</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
