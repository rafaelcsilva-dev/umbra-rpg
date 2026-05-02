import {levels} from "../../../../data/levels.js";

export default function Levels() {
  return (
    <>
      <section id="create-character-levels">
        {levels.map((e, i) => (
          <article key={i}>
            <h3>Nível {e.level}</h3>

            <p>
              <span>PV Iniciais:</span> {" "} {e.pv} + Vigor
            </p>

            <p>
              <span>PD Iniciais:</span>{" "}
              {e.pd} + Presença
            </p>

            <p>
              <span>Perícias:</span>{" "}
              {e.expertise} + Inteligência
            </p>

            <p>
              <span>Poder:</span>{" "}
              {e.power}
            </p>

            <p>
              <span>Atributos:</span>{" "}
              {e.attributes}
            </p>

            <p>
              <span>Requisitos:</span>{" "}
              {e.requirements}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
