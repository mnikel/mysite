import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { homeData } from "@/components/data/data";
import { homedir } from "os";
import Image from "next/image";
import TechnologyStack from "@/components/TechnologyStack/TechnologyStack";
function Page() {
  return (
    <main className="flex flex-col items-center bg-indent">
      {/* sekcja 1 do HOME */}
      <section
        className="flex flex-row w-10/12 mt-10 mb-6 items-center"
        id="home"
      >
        <div>
          <h2> {homeData.title}</h2>
          <p> {homeData.body}</p>
        </div>
      </section>

      {/* sekcja 2 do ABOUT */}
      <section
        className="flex flex-row w-10/12 mt-10 mb-6 items-center"
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
        </div>
        <TechnologyStack />
      </section>
      {/* sekcja 2 do PROJECTS */}
      <section id="projects">
        <div>
          <h2>{homeData.projects}</h2>
        </div>
        <div>
          <h2>Tutaj przemapowac po komponencie z thumbnailem projektu</h2>
          <p>{homeData.projectsPH}</p>
        </div>{" "}
        {/* stworzyc komponent thumbnaila */}
      </section>
    </main>
  );
}

export default Page;
