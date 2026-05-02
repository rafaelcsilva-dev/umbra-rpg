export default function Informations() {
  return (
    <section id="create-character-informations">
      <label htmlFor="character-input-photo">
        <input id="character-input-photo" type="file" />
        <img src="./public/assets/icons/camera-icon.png" alt="" />
      </label>

      <label htmlFor="">
        <span>Nome:</span>
        <input type="text" />
      </label>

      <label htmlFor="">
        <span>Nacionalidade:</span>
        <input type="text" />
      </label>

      <label htmlFor="">
        <span>Idade:</span>
        <input type="number" />
      </label>

      <label htmlFor="">
        <span>Campanha:</span>
        <input type="text" />
      </label>
    </section>
  );
}
