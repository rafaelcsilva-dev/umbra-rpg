import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Icon from "../../components/buttons/Icon.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className="home-screen">
        <button onClick={() => navigate("/list-character")}>
          <Icon name={"person_add"} />
          <span>Personagem</span>
        </button>

        <button onClick={() => navigate("/campaign")}>
          <Icon name={"note_add"} />
          <span>Campanha</span>
        </button>

        <button onClick={() => navigate("/rules")}>
          <Icon name={"import_contacts"} />
          <span>Sistema</span>
        </button>

        <button onClick={() => navigate("/home")}>
          <Icon name={"skull"} />
          <span>Bestiário</span>
        </button>

        <button onClick={() => navigate("/home")}>
          <Icon name={"swords"} />
          <span>Equipamentos</span>
        </button>

        <button onClick={() => navigate("/home")}>
          <Icon name={"article"} />
          <span>Documentação</span>
        </button>

        <button onClick={() => navigate("/home")}>
          <Icon name={"settings"} />
          <span>Configurações</span>
        </button>
      </section>
    </>
  );
}
