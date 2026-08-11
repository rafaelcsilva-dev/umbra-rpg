import Textarea from "../../../components/Inputs/Textarea/Textarea.jsx";

export default function Details() {
  return (
    <section className="create-character-details">
      <Textarea
        title="História:"
        id={"input-history"}
        placeholder={
          "Os eventos marcantes do seu passado e o caminho que te trouxe até aqui."
        }
      />

      <Textarea
        title="Aparência:"
        id={"input-appearance"}
        placeholder={
          "Rosto, porte físico, marcas visíveis, estilo de se vestir e presença."
        }
      />

      <Textarea
        title="Personalidade:"
        id={"input-personality"}
        placeholder={
          "Seus traços marcantes, atitudes, medos e a forma como lida com o mundo."
        }
      />
    </section>
  );
}
