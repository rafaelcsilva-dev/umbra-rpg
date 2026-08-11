import "./Concept.css";
import Input from "../../../components/Inputs/Input/Input.jsx";

export default function Concept() {
  return (
    <>
      <section className="create-character-concept">
        <Input
          type={"text"}
          title="Ofício:"
          id={"input-craft"}
          placeholder={"Quem você era antes."}
        />

        <Input
          type={"text"}
          title="Estigma:"
          id={"input-stigma"}
          placeholder={"A culpa que te condena."}
        />

        <Input
          type={"text"}
          title="Âncora:"
          id={"input-anchor"}
          placeholder={"O que te prende à humanidade."}
        />
      </section>
    </>
  );
}
