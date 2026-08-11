import "./Input.css";

export default function Input({ type, title, id, placeholder }) {
  return (
    <label htmlFor={id}>
      <span>{title}</span>
      <input placeholder={placeholder} type={type} id={id} />
    </label>
  );
}
