import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { homeData } from "@/components/data/data";
import { homedir } from "os";
import Image from "next/image";
import {
  Bootstrap,
  Css,
  Docker,
  Figma,
  Git,
  Html,
  Intellij,
  Java,
  Javascript,
  Mongodb,
  Next,
  Node,
  Python,
  ReactLogo,
  Sass,
  Tailwind,
  Trello,
  Typescript,
  Vsc,
} from "../../app/icons";
function Page() {
  return (
    <main className="flex flex-col items-center">
      {/* sekcja 1 do HOME */}
      <section className="flex flex-row w-10/12 mt-10 mb-6 items-center">
        <div>
          <h2> {homeData.title}</h2>
          <p> {homeData.body}</p>
        </div>
      </section>

      {/* sekcja 2 do ABOUT */}
      <section className="flex flex-row w-10/12 mt-10 mb-6 items-center">
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
        <div>
          <p> {homeData.body}</p> {/* dopisac kolejny key w data!!!!!! */}
        </div>
        <div>
          <h2>{homeData.stack}</h2>
          <div className="flex flex-wrap">
            <Bootstrap />
            <Css />
            <Docker />
            <Figma />
            <Git />
            <Html />
            <Intellij />
            <Java />
            <Javascript />
            <Next />
            <Mongodb />
            <Node />
            <Python />
            <ReactLogo />
            <Sass />
            <Tailwind />
            <Trello />
            <Typescript />
            <Vsc />
          </div>
        </div>
      </section>
      {/* sekcja 2 do PROJECTS */}
      <section>
        <div>
          <h2>{homeData.projects}</h2>
        </div>
        <div>PROJECTS THUMBNAILS</div> {/* stworzyc komponent thumbnaila */}
      </section>
    </main>
  );
}

export default Page;
