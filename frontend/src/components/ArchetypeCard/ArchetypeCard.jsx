import "./ArchetypeCard.css";

export default function ({ archetype, img }) {
  return (
    <article className="achetype-card">
      <section>
        <img src={img} alt="Archetype Icon" />
        <div>
          <h2>{archetype.name}</h2>
          <p>{archetype.desc}</p>
        </div>
      </section>

      <section>
        <div>
          <h2>Atributos</h2>
          <span>Vigor: {archetype.vig}</span>
          <span>Intelecto: {archetype.int}</span>
          <span>Psique: {archetype.psi}</span>
        </div>

        <div>
          <h2>Status</h2>
          <span>Vitalidade: {archetype.pv}</span>
          <span>Lucidez: {archetype.pl}</span>
          <span>Ímpeto: {archetype.pi}</span>
        </div>
      </section>
    </article>
  );
}
