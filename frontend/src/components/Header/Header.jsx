import "./Header.css";
import Icon from "../buttons/Icon";

export default function Header() {
  return (
    <header className="main-header">
      <button>
        <span>UMBRA</span>
        <p>RPG</p>
      </button>

      <div>
        <button>
          <Icon name={"person"} />
        </button>

        <button>
          <Icon name={"menu"} />
        </button>
      </div>
    </header>
  );
}
