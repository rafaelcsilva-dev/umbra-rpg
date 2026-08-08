import "./Textarea.css";

export default function textarea({ title, id }) {
  return (
    <label>
      <span>{title}</span>
      <textarea id={id}></textarea>
    </label>
  );
}
