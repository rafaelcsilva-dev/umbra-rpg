import "./Infos.css";
import Textarea from "../../../components/Inputs/Textarea.jsx";

export default function Infos() {
  return (
    <>
      <section className="create-character-infos">
        <Textarea title="Ofício:" />

        <Textarea title="Estigma:" />

        <Textarea title="Âncora:" />
      </section>
    </>
  );
}
