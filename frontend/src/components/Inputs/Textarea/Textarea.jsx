import "./Textarea.css";

export default function textarea({ title, id, placeholder }) {
  return (
    <label htmlFor={id}>
      <span>{title}</span>
      <textarea id={id} placeholder={placeholder}></textarea>
    </label>
  );
}
