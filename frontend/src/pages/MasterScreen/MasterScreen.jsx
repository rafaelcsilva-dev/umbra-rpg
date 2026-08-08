import { useState } from "react";

import "./MasterScreen.css";

import Header from "../../components/Header/Header";
import Icon from "../../components/buttons/Icon";

import MasterDocuments from "./MasterDocuments/MasterDocuments";
import MasterBoard from "./MasterBoard/MasterBoard";
import MasterSheets from "./MasterSheets/MasterSheets";
import MasterOst from "./MasterOst/MasterOst";
import MasterMaps from "./MasterMaps/MasterMaps";
import MasterRolls from "./MasterRolls/MasterRolls";
import MasterCombat from "./MasterCombat/MasterCombat";

export default function MasterScreen() {
  const sections = {
    documents: <MasterDocuments />,
    board: <MasterBoard />,
    sheets: <MasterSheets />,
    ost: <MasterOst />,
    maps: <MasterMaps />,
    rolls: <MasterRolls />,
    combat: <MasterCombat />,
  };

  const [section, setSection] = useState("documents");

  return (
    <>
      <Header />

      <main className="master-screen">
        <nav>
          <button
            onClick={() => {
              setSection("documents");
            }}
          >
            <Icon name={"folder_copy"} />
            <span>Documentos</span>
          </button>

          <button
            onClick={() => {
              setSection("board");
            }}
          >
            <Icon name={"developer_board"} />
            <span>Mural</span>
          </button>

          <button
            onClick={() => {
              setSection("sheets");
            }}
          >
            <Icon name={"article_person"} />
            <span>Fichas</span>
          </button>

          <button
            onClick={() => {
              setSection("ost");
            }}
          >
            <Icon name={"library_music"} />
            <span>Soundtrack</span>
          </button>

          <button
            onClick={() => {
              setSection("maps");
            }}
          >
            <Icon name={"map"} />
            <span>Mapas</span>
          </button>

          <button
            onClick={() => {
              setSection("rolls");
            }}
          >
            <Icon name={"casino"} />
            <span>Dados</span>
          </button>

          <button
            onClick={() => {
              setSection("combat");
            }}
          >
            <Icon name={"swords"} />
            <span>Combate</span>
          </button>
        </nav>

        <section>{sections[section]}</section>
      </main>
    </>
  );
}
