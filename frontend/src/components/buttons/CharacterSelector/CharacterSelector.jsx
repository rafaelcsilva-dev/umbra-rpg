import "./CharacterSelector.css";

export default function CharacterSelector({ image, name, campaign }) {
  return (
    <>
      <article id="character-selector">
        <img src={image} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{campaign}</p>
        </div>
      </article>
    </>
  );
}
