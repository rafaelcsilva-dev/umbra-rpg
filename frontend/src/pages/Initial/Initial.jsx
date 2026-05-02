import { useNavigate } from "react-router-dom";

import "./Initial.css";

export default function Initial() {
  const navigate = useNavigate();

  return (
    <section className="initial-screen">
      <div>
        <h1>
          UMBRA <span>RPG</span>
        </h1>
        <p>
          Conheça UMBRA rpg, um universo onde as fronteiras da realidade se
          desfazem, o desconhecido ganha forma e cada escolha pode revelar
          verdades que deveriam permanecer ocultas.
        </p>

        <button onClick={() => navigate("/home")}>Entrar</button>
      </div>
    </section>
  );
}
