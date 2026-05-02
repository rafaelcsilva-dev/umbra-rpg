import { attributes } from "./../../../../data/attributes.js";

export default function Attributes() {
  return (
    <section id="create-character-attributes">
      {attributes.map((e, i) => (
        <div key={i}>
          <label htmlFor="">{e[0]}:</label>
          <input value={1} type="number" />
        </div>
      ))}
    </section>
  );
}
