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
    <main className="flex flex-col items-center bg-indent">
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
        <div className="w-1/3">
          <p> {homeData.body}</p> {/* dopisac kolejny key w data!!!!!! */}
        </div>
          <div className="flex flex-wrap w-1/3">
          <h2>{homeData.stack}</h2>
            <Bootstrap className="technology_svg"/>
            <Css className="technology_svg"/>
            <Docker className="technology_svg"/>
            <Figma className="technology_svg"/>
            <Git className="technology_svg"/>
            <Html className="technology_svg"/>
            <Intellij className="technology_svg"/>
            <Java className="technology_svg"/>
            <Javascript className="technology_svg"/>
            <Next className="technology_svg"/>
            <Mongodb className="technology_svg"/>
            <Node className="technology_svg"/>
            <Python className="technology_svg"/>
            <ReactLogo className="technology_svg"/>
            <Sass className="technology_svg"/>
            <Tailwind className="technology_svg"/>
            <Trello className="technology_svg"/>
            <Typescript className="technology_svg"/>
            <Vsc className="technology_svg"/>
          </div>
      </section>
      {/* sekcja 2 do PROJECTS */}
      <section>
        <div>
          <h2>{homeData.projects}</h2>
        </div>
        <div>
        <h2>Tutaj przemapowac po komponencie z thumbnailem projektu</h2>
        <p>{homeData.projectsPH}</p>
        </div> {/* stworzyc komponent thumbnaila */}
      </section>
    </main>
  );
}

export default Page;
