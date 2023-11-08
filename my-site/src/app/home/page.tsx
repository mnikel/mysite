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
        <div className="flex flex-wrap w-1/3 gap-4">
          <div className="w-full flex items-center justify-center mt-auto">
            <h3>{homeData.stack}</h3>
          </div>
          <div>
            <Bootstrap className="order-2" />
            <h4>{homeData.bootstrap}</h4>
          </div>
          <div>
            <Css className="order-2" />
            <h4>{homeData.css}</h4>
          </div>
          <div>
            <Docker className="order-2" />
            <h4>{homeData.docker}</h4>
          </div>
          <div>
            <Figma className="order-2" />
            <h4>{homeData.figma}</h4>
          </div>
          <div>
            <Git className="order-2" />
            <h4>{homeData.git}</h4>
          </div>
          <div>
            <Html className="order-2" />
            <h4>{homeData.html}</h4>
          </div>
          <div>
            <Intellij className="order-2" />
            <h4>{homeData.intellij}</h4>
          </div>
          <div>
            <Java className="order-2" />
            <h4>{homeData.java}</h4>
          </div>
          <div>
            <Javascript className="order-2" />
            <h4>{homeData.javascript}</h4>
          </div>
          <div>
            <Next className="order-2" />
            <h4>{homeData.next}</h4>
          </div>
          <div>
            <Node className="order-2" />
            <h4>{homeData.node}</h4>
          </div>
          <div>
            <Python className="order-2" />
            <h4>{homeData.python}</h4>
          </div>
          <div>
            <ReactLogo className="order-2" />
            <h4>{homeData.react}</h4>
          </div>
          <div>
            <Sass className="order-2" />
            <h4>{homeData.sass}</h4>
          </div>
          <div>
            <Tailwind className="order-2" />
            <h4>{homeData.tailwind}</h4>
          </div>
          <div>
            <Typescript className="order-2" />
            <h4>{homeData.typescript}</h4>
          </div>
          <div>
            <Vsc className="order-2" />
            <h4>{homeData.vsc}</h4>
          </div>
        </div>
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
