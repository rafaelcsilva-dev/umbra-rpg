import "./Header.css";
import Icon from "../buttons/Icon";

export default function Header() {
  return (
    <header className="main-header">
      <button>
        <Icon name={"menu"} />
      </button>
    </header>
  );
}
