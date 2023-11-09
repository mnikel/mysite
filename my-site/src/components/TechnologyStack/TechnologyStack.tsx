import React from "react";
import { homeData } from "../data/data";
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

import Ranking from "../Ranking/Ranking";
function TechnologyStack() {
  return (
    <>
      <div className="flex flex-wrap w-1/3 gap-4">
        <div className="w-full flex items-center justify-center mt-auto">
          <h3>{homeData.stack}</h3>
        </div>
        <div>
          <Bootstrap className="order-2" />
          <h4>{homeData.bootstrap}</h4>
          <div className="flex flex-row justify-center">
            <Ranking yellowStars={3} />
          </div>
        </div>
        <div>
          <Css className="order-2" />
          <h4>{homeData.css}</h4>
          <Ranking yellowStars={2} />
        </div>
        <div>
          <Docker className="order-2" />
          <h4>{homeData.docker}</h4>
          <Ranking yellowStars={1} />
        </div>
        <div>
          <Figma className="order-2" />
          <h4>{homeData.figma}</h4>
          <Ranking yellowStars={4} />
        </div>
        <div>
          <Git className="order-2" />
          <h4>{homeData.git}</h4>
          <Ranking yellowStars={3} />
        </div>
        <div>
          <Html className="order-2" />
          <h4>{homeData.html}</h4>
          <Ranking yellowStars={4} />
        </div>
        <div>
          <Intellij className="order-2" />
          <h4>{homeData.intellij}</h4>
          <Ranking yellowStars={2} />
        </div>
        <div>
          <Java className="order-2" />
          <h4>{homeData.java}</h4>
          <Ranking yellowStars={1} />
        </div>
        <div>
          <Javascript className="order-2" />
          <h4>{homeData.javascript}</h4>
          <Ranking yellowStars={3} />
        </div>
        <div>
          <Next className="order-2" />
          <h4>{homeData.next}</h4>
          <Ranking yellowStars={2} />
        </div>
        <div>
          <Node className="order-2" />
          <h4>{homeData.node}</h4>
          <Ranking yellowStars={3} />
        </div>
        <div>
          <Python className="order-2" />
          <h4>{homeData.python}</h4>
          <Ranking yellowStars={1} />
        </div>
        <div>
          <ReactLogo className="order-2" />
          <h4>{homeData.react}</h4>
          <Ranking yellowStars={3} />
        </div>
        <div>
          <Sass className="order-2" />
          <h4>{homeData.sass}</h4>
          <Ranking yellowStars={2} />
        </div>
        <div>
          <Tailwind className="order-2" />
          <h4>{homeData.tailwind}</h4>
          <Ranking yellowStars={3} />
        </div>
        <div>
          <Typescript className="order-2" />
          <h4>{homeData.typescript}</h4>
          <Ranking yellowStars={3} />
        </div>
        <div>
          <Vsc className="order-2" />
          <h4>{homeData.vsc}</h4>
          <Ranking yellowStars={5} />
        </div>
        <div>
          <Mongodb className="order-2" />
          <h4>{homeData.mongo}</h4>
          <Ranking yellowStars={2} />
        </div>
        <div>
          <Trello className="order-2" />
          <h4>{homeData.trello}</h4>
          <Ranking yellowStars={4} />
        </div>
      </div>
    </>
  );
}

export default TechnologyStack;
