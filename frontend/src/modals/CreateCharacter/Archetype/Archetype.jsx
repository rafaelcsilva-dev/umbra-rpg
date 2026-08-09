import "./Archetype.css";

import { archetypes } from "../../../data/archetype.js";
import ArchetypeCard from "../../../components/ArchetypeCard/ArchetypeCard.jsx";

export default function Details() {
  return (
    <section className="create-character-archetype">
      {archetypes.map((e, i) => (
        <ArchetypeCard key={i} archetype={e} />
      ))}
    </section>
  );
}
