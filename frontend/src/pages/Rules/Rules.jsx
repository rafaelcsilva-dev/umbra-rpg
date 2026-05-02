import "./Rules.css";

import Header from "../../components/Header/Header";

export default function Rules() {
  return (
    <>
      <Header />

      <section id="rules-page">
        <h1>
          UMBRA <span>RPG</span>
        </h1>

        <span>Não se engane, você não entrou neste lugar por acidente.</span>

        <hr />

        <h2>Introdução</h2>

        <details>
          <summary>Sobre o Universo</summary>

          <p>
            A Umbra não é um local geográfico. Ela não aparece em mapas, não
            possui coordenadas e não respeita a geometria dos homens. Ela é um
            reflexo; um espelho negro posicionado diante da sua alma. Você está
            aqui porque o peso do que você esconde se tornou maior do que o
            mundo real podia suportar.
          </p>

          <div>
            <h3>I. Horror</h3>
            <p>
              Aqui, as paredes sangram porque você feriu alguém. Os corredores
              se estendem infinitamente porque você fugiu de suas
              responsabilidades. Os monstros que vagam pela neblina não podem
              ser nomeados ou explicados de forma que faça sentido, eles são
              ecos distorcidos das pessoas que você decepcionou e as vozes dos
              segredos que você tentou enterrar.
            </p>
          </div>

          <div>
            <h3>II. Distorção</h3>
            <p>
              A Umbra se comunica através do defeito. O chiado de um rádio fora
              de sintonia, o flash de uma câmera que revela o que o olho humano
              ignora, o frio súbito que sobe pela espinha quando você percebe
              que a sua sombra se moveu sozinha. Se você ouviu algo, já é tarde
              demais. Se você viu algo, isso agora faz parte de você.
            </p>
          </div>

          <div>
            <h3>III. Peso</h3>
            <p>
              Seu corpo pode ser ferido, e o sangue que escorre dele é real. Mas
              em Umbra, uma ferida em seu corpo dói menos que uma memória. Você
              pode tentar sobreviver aos golpes de uma criatura, mas ninguém
              sobrevive ao peso da própria verdade se não estiver disposto a
              encará-la.
            </p>
          </div>

          <div>
            <h3>IV. Ilusão</h3>
            <p>
              Aqui, a luz não traz segurança; ela apenas projeta sombras mais
              longas. Uma lanterna com pilhas fracas ou a chama de um isqueiro
              são apenas ferramentas para que você veja exatamente o que está
              prestes a te consumir.
            </p>
          </div>

          <div>
            <h3>V. Cicatriz</h3>
            <p>
              Você não veio para cá para ser um herói. Você veio para ser
              julgado. Suas habilidades adquiridas com seus anos de experiência
              e seus ofícios determinam como você sobrevive, mas é a sua culpa
              que determina por que você continua respirando.
            </p>
          </div>
        </details>

        <details>
          <summary>Termos Importantes</summary>

          <p>
            Para garantir que todos os participantes estejam alinhados com a
            atmosfera e as regras de UMBRA RPG, esta seção apresenta os
            conceitos fundamentais que regem o sistema. Estes termos conectam a
            identidade do seu personagem às mecânicas do jogo.
          </p>

          <div>
            <h3>Termos da Ficha</h3>
            <p>
              <span>&#8226; Atributos:</span> São os pilares que definem as
              capacidades físicas, mentais e psicológicas do personagem.
            </p>

            <p>
              <span>&#8226; Ofício:</span> A vida anterior do personagem que
              fornece experiência prática e bônus em testes relacionados.
            </p>

            <p>
              <span>&#8226; PV (Pontos de Vitalidade):</span> A medida da
              integridade física do personagem.
            </p>

            <p>
              <span>&#8226; PL (Pontos de Lucidez):</span> Semelhante aos pontos
              de vitalidade. Representam a estabilidade psicológica do
              personagem diante do horror.
            </p>

            <p>
              <span>&#8226; Inventário:</span> O inventário é o sistema que
              gerencia os recursos e itens que o personagem carrega consigo.
            </p>
          </div>

          <div>
            <h3>Notação de Dados</h3>
            <p>
              Para facilitar a leitura das regras de testes, é utilizado uma
              abreviação padrão para se referir aos diferentes tipos de dados. a
              letra "d" acompanhada de um número que indica quantas faces o dado
              possui.
            </p>

            <p>
              <span>d4, d6, d8, d10, d12, d20</span> Representam
              respectivamente, dado de quatro, seis, oito, dez, doze e vinte
              faces.
            </p>

            <p>
              <span>Quantidade de Dados</span> Quando um número precede o "d"
              (ex:2d10), ele indica quantos dados daquele tipo você deve rolar
              simultaneamente. No caso de <strong>2d10</strong> você rola dois
              dados de dez faces.
            </p>

            <p>
              <span>Uso em UMBRA:</span> Embora o motor principal do sistema
              seja o <strong>d10</strong>, outros dados podem ser utilizados
              ocasionalmente para determinar danos, efeitos de itens ou
              variações em eventos narrativos.
            </p>
          </div>

          <div>
            <h3>Termos de Jogo</h3>
            <p>
              <span>&#8226; NPC:</span> Sigla em inglês que significa
              "personagem não jogador".
            </p>

            <p>
              <span>&#8226; Teste:</span> Um teste ocorre sempre que o
              personagem tenta realizar uma ação cujo resultado é incerto ou
              perigoso. Ele serve para determinar se o personagem obteve sucesso
              ou um fracasso.
            </p>

            <p>
              <span>&#8226; Rolagem:</span> Quando o jogador deve rolar dados na
              mesa.
            </p>

            <p>
              <span>&#8226; Bônus:</span> Recurso mecânico que amplia a
              quantidade de dados em uma rolagem (geralmente +1d10), aumentando
              as chances de sucesso.
            </p>

            <p>
              <span>&#8226; Desvantagem:</span> O oposto do bônus; um recurso
              que remove dados da reserva do jogador, tornando a falha mais
              provável.
            </p>

            <p>
              <span>&#8226; DT (Dificuldade do Teste):</span> É o mecanismo que
              o Mestre utiliza para representar nivelar o quão difícil um teste
              é.
            </p>

            <p>
              Por padrão, a maioria das ações em Umbra exige apenas um sucesso
              (um dado com valor 7 ou mais) para ser realizada. No entanto, em
              situações de extrema complexidade, perigo ou resistência, o Mestre
              pode aumentar a DT, sendo necessário dois sucessos ou mais para
              passar no teste.
            </p>
          </div>
        </details>

        <details>
          <summary>Mecânica Básica</summary>

          <div>
            <p>
              O sistema de UMBRA RPG foca na tensão narrativa e no impacto das
              escolhas de conceito do personagem na história. O motor principal
              é o dado de dez faces (d10), utilizado para a maioria das
              resoluções.
            </p>
          </div>

          <div>
            <h3>Como realizar um teste</h3>
            <p>
              <span>Ação:</span> O jogador descreve o que deseja fazer.
            </p>

            <p>
              <span>Atributo:</span> O mestre define qual atributo (Vigor,
              Intelecto ou Psique) combina com a ação.
            </p>

            <p>
              <span>Rolagem:</span> O jogador rola uma quantidade de dados (d10)
              igual ao valor do atributo definido.
            </p>

            <p>
              <span>Resolução:</span> O dado com o maior valor entre os rolados
              é o resultado final.
            </p>
          </div>

          <div>
            <h3>Escala de Resultados</h3>
            <p>
              <span>1 (Falha Crítica):</span> Além de não conseguir realizar a
              ação, a situação piora ou o personagem sofre uma penalidade
              técnica.
            </p>

            <p>
              <span> 2 a 5 (Falha):</span> O personagem simplesmente não atinge
              o objetivo proposto.
            </p>

            <p>
              <span> 6 a 9 (Sucesso):</span> A ação é realizada conforme o
              esperado, sem complicações.
            </p>

            <p>
              <span>10 (Sucesso Crítico):</span> O personagem consegue o que
              queria com um benefício extra.
            </p>
          </div>
        </details>

        <hr />

        <h2>Criação de Personagem</h2>

        <details>
          <summary>Conceito</summary>
        </details>

        <details>
          <summary>Níveis</summary>
        </details>

        <details>
          <summary>Atributos</summary>
        </details>

        <hr />

        <h2>Investigação</h2>

        <details>
          <summary>Procurando Pistas</summary>
        </details>

        <details>
          <summary>Investigação Dedutiva</summary>
        </details>

        <hr />

        <h2>Combate</h2>
        <details>
          <summary>Mecânicas de Combate</summary>
        </details>

        <details>
          <summary>Armas</summary>
        </details>

        <details>
          <summary>Proteções</summary>
        </details>
      </section>
    </>
  );
}
