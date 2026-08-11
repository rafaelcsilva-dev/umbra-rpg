import { useNavigate } from "react-router-dom";

import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Icon from "../../components/buttons/Icon.jsx";
import ListCharacter from "../Characters/Characters.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className="home-screen">
        <button onClick={() => navigate("/characters")}>
          <Icon name={"person"} />
          <span>Personagem</span>
        </button>

        <button onClick={() => navigate("/campaign")}>
          <Icon name={"article"} />
          <span>Campanha</span>
        </button>

        <button onClick={() => navigate("/rules")}>
          <Icon name={"import_contacts"} />
          <span>Regras</span>
        </button>
      </section>
    </>
  );
}
