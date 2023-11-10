import React from "react";
import { homeData } from "../data/data";
import Ranking from "../Ranking/Ranking";
import * as Icons from "../../app/icons";

const categories = [
  {
    title: homeData.stackFrontend,
    tech: [
      { Icon: Icons.Html, title: homeData.html, rating: 4 },
      { Icon: Icons.Bootstrap, title: homeData.bootstrap, rating: 3 },
      { Icon: Icons.Javascript, title: homeData.javascript, rating: 3 },
      { Icon: Icons.ReactLogo, title: homeData.react, rating: 3 },
      { Icon: Icons.Tailwind, title: homeData.tailwind, rating: 3 },
      { Icon: Icons.Next, title: homeData.next, rating: 2 },
      { Icon: Icons.Css, title: homeData.css, rating: 2 },
      { Icon: Icons.Sass, title: homeData.sass, rating: 2 },
      { Icon: Icons.Typescript, title: homeData.typescript, rating: 3 },
    ],
  },
  {
    title: homeData.stackBackend,
    tech: [
      { Icon: Icons.Node, title: homeData.node, rating: 3 },
      { Icon: Icons.Express, title: homeData.express, rating: 2 },
      { Icon: Icons.Nest, title: homeData.nest, rating: 2 },
      { Icon: Icons.Java, title: homeData.java, rating: 1 },
      { Icon: Icons.Python, title: homeData.python, rating: 1 },
    ],
  },
  {
    title: homeData.stackTools,
    tech: [
      { Icon: Icons.Vsc, title: homeData.vsc, rating: 5 },
      { Icon: Icons.Figma, title: homeData.figma, rating: 4 },
      { Icon: Icons.Trello, title: homeData.trello, rating: 4 },
      { Icon: Icons.Git, title: homeData.git, rating: 3 },
      { Icon: Icons.Intellij, title: homeData.intellij, rating: 2 },
      { Icon: Icons.Docker, title: homeData.docker, rating: 1 },
      { Icon: Icons.Azure, title: homeData.azure, rating: 1 },
    ],
  },
  {
    title: homeData.stackDatabases,
    tech: [{ Icon: Icons.Mongodb, title: homeData.mongo, rating: 2 }],
  },
];

function TechnologyStack() {
  return (
    <div className="flex flex-row justify-center flex-wrap w-1/3 gap-4">
      <div className="w-full flex items-center justify-center mt-auto">
        <h3 className="text-3xl">{homeData.stack}</h3>
      </div>

      {categories.map((category, index) => (
        <div key={index}>
          <h3 className="text-pinkbracket text-2xl">{category.title}</h3>
          {category.tech.sort((a, b) => b.rating - a.rating).map((tech, index) => (
            <div key={index}>
              <tech.Icon className="order-2" />
              <h4>{tech.title}</h4>
              <Ranking yellowStars={tech.rating} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TechnologyStack;
