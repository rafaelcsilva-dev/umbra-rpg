import "./Campaign.css";

import Header from "../../components/Header/Header";
import Icon from "../../components/buttons/Icon";

export default function Campaign() {
  return (
    <>
      <Header />

      <section id="campaign-page">
        <article
          style={{
            backgroundImage: 'url("/assets/bg/cidade-espiral.jpg")',
          }}
        >
          <p>
            <Icon name={"person"} />
            <span>8</span>
          </p>

          <div>
            <p>Campanha: Refúgio Sereno</p>
            <button>Entrar</button>
          </div>
        </article>
      </section>
    </>
  );
}
