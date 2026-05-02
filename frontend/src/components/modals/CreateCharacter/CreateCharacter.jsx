import { useState } from "react";

import Icon from "../../buttons/Icon";
import "./CreateCharacter.css";

import Informations from "./1-Informations/Informations";
import Details from "./2-Details/Details";
import Levels from "./3-Levels/Levels";
import Origins from "./4-Origins/Origins";
import Attributes from "./5-Attributes/Attributes";

export default function CreateCharacter({ OnClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["INFORMAÇÕES", "DETALHES", "NÍVEL", "ORIGENS", "ATRIBUTOS"];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const stepComponents = [
    <Informations />,
    <Details />,
    <Levels />,
    <Origins />,
    <Attributes />,
  ];

  return (
    <>
      <form action="" id="create-character-modal">
        <header>
          <button type="button">
            <Icon name={"info"}></Icon>
          </button>

          <h2>{steps[currentStep]}</h2>

          <button type="button" onClick={OnClose}>
            <Icon name={"close"}></Icon>
          </button>
        </header>

        {stepComponents[currentStep]}

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
