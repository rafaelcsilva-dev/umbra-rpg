import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ListCharacter.css";
import Header from "../../components/Header/Header.jsx";
import Icon from "../../components/buttons/Icon.jsx";
import CharacterSelector from "../../components/buttons/CharacterSelector/CharacterSelector.jsx";
import CreateCharacter from "../../components/modals/CreateCharacter/CreateCharacter.jsx";

export default function ListCharacter() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />

      <section className="list-player-screen">
        <button onClick={() => setIsModalOpen(true)}>
          <Icon name={"person_add"} />
        </button>

        <CharacterSelector
          image={"./public/assets/profile/batman.jpg"}
          name={"Batman"}
          campaign={"Asylum Arkham"}
        />

        <CharacterSelector
          image={"./public/assets/profile/spider-man.jpg"}
          name={"Spider Man"}
          campaign={"Guerras Secretas"}
        />
      </section>

      {isModalOpen && (
        <CreateCharacter
          OnClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}

//ListCharacter
