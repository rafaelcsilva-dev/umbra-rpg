import "./ProfileCard.css";

export default function ProfileCard({ character }) {
  return (
    <div className="profile-card">
      <img src={character.img} alt={`${character.name} icon profile`} />

      <div>
        <h2>{character.name}</h2>
        <p>{character.campaign}</p>
        <span>{character.released}</span>
      </div>
    </div>
  );
}
