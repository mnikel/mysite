"use client";
import { homeData } from "@/components/data/data";
import Image from "next/image";
import TechnologyStack from "@/components/TechnologyStack/TechnologyStack";
import AboutMeToggleButton from "@/components/AboutMeToggleButton/AboutMeToggleButton";
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
        <div className="w-1/3">
          <Image
            width={640}
            height={960}
            aria-aria-label={"Photo of me"}
            alt={"Photo of me"}
            src={"/images/photo.jpeg"}
            priority={false}
            className="photo"
          />
        </div>

        <div className="w-1/3">
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
        <div className="mb-4">
          <h2>{homeData.projects}</h2>
        </div>
        <div>
          <h2>Tutaj przemapowac po komponencie z thumbnailem projektu</h2>
          <p>{homeData.projectsPH}</p>
        </div>
        {/* stworzyc komponent thumbnaila */}
      </section>
    </main>
  );
}

export default Page;
