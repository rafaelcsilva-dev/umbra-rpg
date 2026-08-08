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
        <nav>
          <button>
            <Icon name={"person"} />
            <span>JOGADOR</span>
          </button>

          <button>
            <Icon name={"crown"} />
            <span>MESTRE</span>
          </button>
        </nav>
      </section>
    </>
  );
}
