import { origins } from "./../../../../data/origins.js";

export default function Origins() {
  return (
    <section id="create-character-origins">
      {origins.map((e, i) => (
        <label key={i} htmlFor="">
          <details>
            <summary>
              <span>{e.origin[0]}</span>
              <input type="radio" value={i} id="" />
            </summary>

            <p>{e.origin[1]}</p>

            <p>
              <span>Perícias Treinadas:</span> {e.expertises[0]} e{" "}
              {e.expertises[1]}
            </p>

            <p>
              <span>{e.power[0]}</span> {e.power[1]}
            </p>
          </details>
        </label>
      ))}
    </section>
  );
}
