import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./ListCharacter.css";

import Header from "../../components/Header/Header.jsx";
import Icon from "../../components/buttons/Icon.jsx";

import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";

import CreateCharacter from "../../modals/CreateCharacter/CreateCharacter.jsx";

export default function ListCharacter() {
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

      <section className="list-player-screen">
        <button onClick={() => setIsModalOpen(true)}>
          <Icon name={"person_add"} />
        </button>

        <ProfileCard
          img={"./public/assets/profile/valentim.jpg"}
          title={"Valentim Ferreira Souza"}
          subtitle={"A Chama Eterna"}
        />

        <ProfileCard
          img={"./public/assets/profile/yelena.jpg"}
          title={"Yelena"}
          subtitle={"Refúgio Sereno"}
        />

        <ProfileCard
          img={"./public/assets/profile/sophia.jpg"}
          title={"Sophia"}
          subtitle={"Refúgio Sereno"}
        />
      </section>
    </>
  );
}

//ListCharacter
