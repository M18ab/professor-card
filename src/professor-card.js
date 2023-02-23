import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 

const prof = new URL('../assets/professoro.jpg', import.meta.url).href;

export class ProfessorCard extends LitElement {
  static get properties() {
    return {
      author: { type: String,},
      professor: { type: String, reflect: true,},
      funFact: { type: String,},
      topText: { type: String,},
      BottomText: { type: String,},
      profURL: { type: String,},
      description: {type: String}
    };
  }

  static get styles() {
    return css`
      .two {
        display: flex;
        flex-direction: row;
      }

      .card {
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        height: auto;
        width: 300px;
        background-color: #d3d3d3;
        display: flex;
        flex-direction: column;
        margin: 10px;
        border-radius: 25px;
      }

      /* @media screen and (min-width: 800px) {
        .btn {
          visibility: hidden;
        }
      } */

      @media screen and (max-width: 500px) {
        .card {
          text-transform: var;
          width: var;
          font-size: 4vw;
          background-color: #a71c19;
          color: white
        }
      }

      img {
        margin: 25px;
      }
    `;
  }

  constructor() {
    super();
    this.author = 'Spenser McLaughlin';
    this.professor = 'Professor Bryan Ollendyke';
    this.funFact = 'This is a picture of a Bing user';
    this.topText = 'Imagine being IT competent';
    this.bottomText = 'But using BING';
    this.profURL = 'https://avatars.githubusercontent.com/u/329735?v=4';
    this.description = 'Details';
  }

  render() {
    return html`
      <div>
        <div class="two">
          <div class="card" id="card1">
            <h2 id="header">${this.professor}</h2>
            <h3>By ${this.author}</h3>
            <meme-maker
              top-text="${this.topText}"
              image-url="${this.profURL}"
              bottom-text="${this.bottomText}"
            ></meme-maker>
            <details class="details">
              <summary>${this.description}</summary>
              <div>
                <slot name="bing"></slot>
              </div>
            </details>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('professor-card', ProfessorCard);
