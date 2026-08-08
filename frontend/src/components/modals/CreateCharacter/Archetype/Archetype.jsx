import "./Archetype.css";

import { archetypes } from "../../../../data/archetype";
import ArchetypeCard from "../../../ArchetypeCard/ArchetypeCard";

export default function Details() {
  return (
    <section className="create-character-archetype">
      {archetypes.map((e, i) => (
        <ArchetypeCard
          key={i}
          img={`./public/assets/icons/archetype-${i + 1}.png`}
          archetype={e}
        />
      ))}
    </section>
  );
}
