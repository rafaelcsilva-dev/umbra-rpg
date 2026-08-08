import { useNavigate } from "react-router-dom";

import "./Initial.css";

export default function Initial() {
  const navigate = useNavigate();

  return (
    <section className="initial-screen">
      <img src="./public/assets/umbra-logo.png" alt="Umbra RPG logo" />

      <p>
        Conheça UMBRA rpg, um universo onde as fronteiras da realidade se
        desfazem, o desconhecido ganha forma e cada escolha pode revelar
        verdades que deveriam permanecer ocultas.
      </p>

      <div>
        <button onClick={() => navigate("/home")}>JOGUE AGORA</button>
      </div>
    </section>
  );
}
