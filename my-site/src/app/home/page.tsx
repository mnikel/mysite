"use client";
import { homeData } from "@/components/data/data";
import Image from "next/image";
import TechnologyStack from "@/components/TechnologyStack/TechnologyStack";
import AboutMeToggleButton from "@/components/AboutMeToggleButton/AboutMeToggleButton";
import ProjectThumbnail from "@/components/ProjectThumbnail/ProjectThumbnail";
import { projects } from "@/components/data/data";
function Page() {
  
  return (
    <main className="flex flex-col items-center bg-indent">
      {/* sekcja 1 do HOME */}
      <section
        className=""
        id="home"
      >
        <div>
          <h4>{homeData.title}</h4>
          <h4>{homeData.title1}</h4>
          <h4>{homeData.title2}</h4>
          <h4>{homeData.title3}</h4>
          <h4>{homeData.title4}</h4>
          <h4>{homeData.title5}</h4>
          <h4>{homeData.title6}</h4>
          <h4>{homeData.title7}</h4>
        </div>
      </section>

      {/* t,t1,t2... mapowanko ! */}

      {/* sekcja 2 do ABOUT */}
      <section
        className=""
        id="about"
      >
        <div className="first-letter:">
          <Image
            width={640}
            height={960}
            aria-aria-label={"Photo of me"}
            alt={"Photo of me"}
            src={"/images/photo.jpeg"}
            priority={false}
            className=""
          />
        </div>

        <div className="">
          <p> {homeData.body}</p> {/* dopisac kolejny key w data!!!!!! */}
          <div>
            <AboutMeToggleButton />
          </div>
        </div>
        <TechnologyStack />
        {/* Komponent z CV */}
      </section>

      {/* sekcja 2 do PROJECTS */}
      
      <section
        id="projects"
        className=""
      >
        <div className="">
          <h2>{homeData.projects}</h2>
        </div>
        <div>
          <p>{""}</p>
        </div>
        <div className="">
      {projects.map((project, index) => (
        <ProjectThumbnail key={index} {...project} />
      ))}
    </div>      </section>
    </main>
  );
}

export default Page;
