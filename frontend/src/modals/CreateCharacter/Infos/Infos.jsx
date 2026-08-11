import "./Infos.css";
import Input from "../../../components/Inputs/Input/Input";

export default function Infos() {
  return (
    <>
      <section className="create-character-infos">
        <Input
          type={"text"}
          title={"Nome:"}
          id={"input-name"}
          placeholder={"Ex: Valentim Ferreira..."}
        />

        <Input
          type={"text"}
          title={"Local:"}
          id={"input-location"}
          placeholder={"Ex: São Paulo..."}
        />

        <Input
          type={"number"}
          title={"Idade:"}
          id={"input-age"}
          placeholder={"Ex: 21..."}
        />

        <Input
          type={"text"}
          title={"Campanha:"}
          id={"input-campaign"}
          placeholder={"Ex: A Chama Eterna..."}
        />
      </section>
    </>
  );
}
