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

          <div>
            <p>
              <span>I.</span> A Umbra não é um local geográfico. Ela não aparece
              em mapas, não possui coordenadas e não respeita a geometria dos
              homens. Ela é um reflexo; um espelho negro posicionado diante da
              sua alma. Você está aqui porque o peso do que você esconde se
              tornou maior do que o mundo real podia suportar.
            </p>
          </div>

          <div>
            <p>
              <span>II.</span> Aqui, as paredes sangram porque você feriu
              alguém. Os corredores se estendem infinitamente porque você fugiu
              de suas responsabilidades. Os monstros que vagam pela neblina não
              podem ser nomeados ou explicados de forma que faça sentido, eles
              são ecos distorcidos das pessoas que você decepcionou e as vozes
              dos segredos que você tentou enterrar.
            </p>
          </div>

          <div>
            <p>
              <span>III.</span> A Umbra se comunica através do defeito. O chiado
              de um rádio fora de sintonia, o flash de uma câmera que revela o
              que o olho humano ignora, o frio súbito que sobe pela espinha
              quando você percebe que a sua sombra se moveu sozinha. Se você
              ouviu algo, já é tarde demais. Se você viu algo, isso agora faz
              parte de você.
            </p>
          </div>

          <div>
            <p>
              <span>IV.</span> Seu corpo pode ser ferido, e o sangue que escorre
              dele é real. Mas em Umbra, uma ferida em seu corpo dói menos que
              uma memória. Você pode tentar sobreviver aos golpes de uma
              criatura, mas ninguém sobrevive ao peso da própria verdade se não
              estiver disposto a encará-la.
            </p>
          </div>

          <div>
            <p>
              <span>V.</span> Aqui, a luz não traz segurança; ela apenas projeta
              sombras mais longas. Uma lanterna com pilhas fracas ou a chama de
              um isqueiro são apenas ferramentas para que você veja exatamente o
              que está prestes a te consumir.
            </p>
          </div>

          <div>
            <p>
              <span>VI.</span> Você não veio para cá para ser um herói. Você
              veio para ser julgado. Suas habilidades adquiridas com seus anos
              de experiência e seus ofícios determinam como você sobrevive, mas
              é a sua culpa que determina por que você continua respirando.
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

        <details>
          <summary>Termos Importantes</summary>

          <p>
            Para garantir que todos os participantes estejam alinhados com a
            atmosfera e as regras de UMBRA RPG, esta seção apresenta os
            conceitos fundamentais que regem o sistema. Estes termos conectam a
            identidade do seu personagem às mecânicas do jogo.
          </p>

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
              &#8226; <span>Ímpeto:</span> É o recurso que mede a determinação e
              a força de vontade do sobrevivente diante do horror. Diferente da
              Lucidez, o Ímpeto é uma reserva ativa usada para superar limites
              físicos e mentais em momentos de crise.
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
        </details>

        <hr />

        <h2>Criação de Personagem</h2>

        <details>
          <summary>Conceito</summary>

          <div>
            <p>
              Nesta etapa, você define quem é o personagem e quais são as
              feridas abertas em sua história. Separamos isso em três partes
              principais:
            </p>
          </div>

          <div>
            <p>
              <span>Ofício:</span> É a vida anterior do personagem, sua
              profissão ou habilidade técnica desenvolvidas em sua vida
              anteriormente.
            </p>

            <p>
              O Ofício não tem um valor numérico fixo, mas concede um bônus de
              +1d10 em qualquer teste onde esse conhecimento prático seja
              aplicável.
            </p>

            <p>
              Por exemplo um personagem que era "detetive" recebe o bônus ao
              investigar uma cena de crime ou tentar ler as intenções de um NPC.
            </p>
          </div>

          <div>
            <p>
              <span>Estigma:</span> É a marca da sua culpa. Representa o trauma,
              o erro grave ou o segredo enterrado que trouxe o personagem até a
              Umbra para ser julgado.
            </p>
            <p>
              O mestre usará o Estigma para criar as criaturas, os desafios e
              conflitos principais da campanha.
            </p>
          </div>

          <div>
            <p>
              <span>Âncora:</span> Uma pessoa, um objeto, até uma memória.
              Qualquer coisa que simboliza a conexão do personagem com a
              realidade e com a sua humanidade.
            </p>

            <p>
              A Âncora é a ferramente principal para recuperar pontos de lucides
              (PL) durante momentos de respiro.
            </p>

            <p>
              Perder a sua Âncora é um passo direto para a loucura definitiva,
              caso isso aconteça, o personagem perde metade de seus pontos de
              lucidez (PL).
            </p>
          </div>
        </details>

        <details>
          <summary>Arquétipo</summary>

          <p>
            No sistema UMBRA, um Arquétipo define o Perfil de Sobrevivência
            inicial do personagem. Ele estabelece como os recursos fundamentais
            são distribuídos, determinando a capacidade do sobrevivente de
            resistir aos desafios físicos e mentais do ambiente.
          </p>

          <div>
            <h3>Pontos de Status</h3>

            <p>
              <span>Pontos de Vitalidade (PL):</span> É a sua barra de vida,
              mede a integridade física do seu corpo e sua capacidade de
              absrover ferimentos.
            </p>

            <p>
              Quando os PVs chegam a zero, o personagem entra em colapso físico,
              podendo morrer ou sofrer sequelas permanentes
            </p>

            <p>Os pontos de Vitalidade são definidos partir do arquétipo</p>
          </div>

          <div>
            <p>
              <span>Pontos de Lucidez (PL):</span> Mede a sanidade do
              personagem,
            </p>

            <p>
              Atributos Base: Define a distribuição inicial entre Vigor,
              Intelecto e Psique.
            </p>

            <p>
              Reservas de Resistência: Determina os valores iniciais de
              Vitalidade (PV) e Lucidez (PL).
            </p>

            <p>
              Potencial de Ímpeto: Estabelece a quantidade de pontos disponíveis
              para converter em dados extras ou ativar habilidades especiais.
            </p>
          </div>

          <div>
            <p></p>
          </div>

          <div>
            <h3>Atributos</h3>
          </div>

          <div>
            <h3>Os Arquétipos</h3>

            <p>
              <span>Resiliente:</span> Focado em resistência física e
              durabilidade. Possui os maiores valores de Vitalidade (PV),
              priorizando o atributo Vigor. É a escolha para quem prefere
              suportar danos físicos e se manter de pé em situações de risco
              biológico ou exaustão.
            </p>

            <p>
              <span>Analítico:</span> Focado em processamento de informações e
              resolução de problemas. Prioriza o atributo Intelecto, o que
              garante mais Perícias iniciais e uma Percepção Passiva elevada.
              Ideal para lidar com mecânicas de investigação e interação com
              objetos.
            </p>

            <p>
              <span>Estoico:</span> Focado em estabilidade mental e controle
              emocional. Possui o maior valor de Lucidez (PL) base, priorizando
              o atributo Psique. É eficaz para mitigar perdas de sanidade e
              resistir a efeitos que atacam a mente do personagem.
            </p>

            <p>
              <span>Pragmático:</span> Um perfil híbrido que distribui seus
              recursos entre Vigor e Intelecto. Oferece um meio-termo entre
              capacidade física e técnica, sendo versátil para lidar com
              exploração de cenário e sobrevivência básica.
            </p>

            <p>
              <span>Empata:</span> Um perfil híbrido voltado para a compreensão
              de sistemas e indivíduos. Equilibra Intelecto e Psique, resultando
              em bons valores de investigação e resistência mental, embora
              apresente a menor base de defesa física do grupo.
            </p>
          </div>
        </details>

        <details>
          <summary>Atributos</summary>

          <p></p>
        </details>

        <details>
          <summary>Pontos de Status</summary>
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
