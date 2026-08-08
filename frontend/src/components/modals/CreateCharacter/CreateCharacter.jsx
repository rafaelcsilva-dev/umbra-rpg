import { useState } from "react";

import Icon from "../../buttons/Icon";
import "./CreateCharacter.css";

import Infos from "./Infos/Infos";
import Details from "./Details/Details";
import Archetype from "./Archetype/Archetype";

export default function CreateCharacter({ OnClose }) {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { title: "INFORMAÇÕES", component: <Infos /> },
    { title: "DETALHES", component: <Details /> },
    { title: "ARQUÉTIPOS", component: <Archetype/> },
  ];

  const nextStep = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevStep = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <>
      <form action="" id="create-character-modal">
        <header>
          <button type="button">
            <Icon name={"info"}></Icon>
          </button>

          <h2>{sections[currentSection].title}</h2>

          <button type="button" onClick={OnClose}>
            <Icon name={"close"}></Icon>
          </button>
        </header>

        {sections[currentSection].component}

        <footer>
          <button type="button" onClick={prevStep}>
            <Icon name={"undo"}></Icon>
          </button>

          <button type="button" onClick={nextStep}>
            <Icon name={"redo"}></Icon>
          </button>
        </footer>
      </form>
    </>
  );
}
