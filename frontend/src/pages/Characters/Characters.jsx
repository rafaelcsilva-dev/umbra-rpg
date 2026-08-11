import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Characters.css";

import { characters } from "../../data/character.js";

import Header from "../../components/Header/Header.jsx";
import Icon from "../../components/buttons/Icon.jsx";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import CreateCharacter from "../../modals/CreateCharacter/CreateCharacter.jsx";

export default function Characters() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <CreateCharacter
          OnClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}

      <Header />

      <section className="characters-screen">
        <button onClick={() => setIsModalOpen(true)}>
          <Icon name={"person_add"} />
        </button>

        <div>
          {characters.map((e, i) => (
            <ProfileCard key={i} character={e} />
          ))}
        </div>
      </section>
    </>
  );
}

//ListCharacter
