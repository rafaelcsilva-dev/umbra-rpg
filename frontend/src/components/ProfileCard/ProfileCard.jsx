import "./ProfileCard.css";

export default function ProfileCard({ img, alt, title, subtitle }) {
  return (
    <div className="profile-card">
      <img src={img} alt={alt} />

      <div>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
