import "./ArchetypeCard.css";

export default function ({ archetype }) {
  return (
    <article className="achetype-card">
      <div>
        <h2>{archetype.name}</h2>
        <p>{archetype.desc}</p>
      </div>

      <section>
        <div>
          <h2>Atributos</h2>
          <span>
            Vigor: <strong>{archetype.vig}</strong>
          </span>
          <span>
            Intelecto: <strong>{archetype.int}</strong>
          </span>
          <span>
            Psique: <strong>{archetype.psi}</strong>
          </span>
        </div>

        <div>
          <h2>Status</h2>
          <span>Vitalidade: <strong>{archetype.pv}</strong></span>
          <span>Lucidez: <strong>{archetype.pl}</strong></span>
          <span>Ímpeto: <strong>{archetype.pi}</strong></span>
        </div>
      </section>
    </article>
  );
}
