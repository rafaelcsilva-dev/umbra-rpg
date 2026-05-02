import { useNavigate } from "react-router-dom";
import "./Sheet.css";
import Header from "../../components/Header/Header.jsx";
import Icon from "../../components/buttons/Icon.jsx";

export default function Sheet() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className="sheet-screen">
        <button>
          <Icon />
          <span></span>
        </button>
      </section>
    </>
  );
}
