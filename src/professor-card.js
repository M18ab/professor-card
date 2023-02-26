import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 

const prof = new URL('../assets/professoro.jpg', import.meta.url).href;

export class ProfessorCard extends LitElement {
  static get properties() {
    return {
      author: { type: String},
      professorName: { type: String, reflect: true},
      funFact: { type: String},
      topText: { type: String},
      bottomText: { type: String},
      imgURL: { type: String},
      description: {type: String},
      shadowColor: {type: String, reflect: true, attribute: 'shadow-color'},
    };
  }

  static get styles() {
    return css`
      :host([shadow-color="true"]) .card {
        box-shadow: 1px 2px 3px 4px rgba(20,20,20,0.4);
      }

      .card {
        text-align: center;
        transition: 0.3s;
        height: auto;
        width: 300px;
        background-color: #d3d3d3;
        display: flex;
        flex-direction: column;
        margin: 10px;
        border-radius: 25px;
        box-shadow: ;
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
    this.professorName = 'Professor Bryan Ollendyke';
    this.funFact = 'This is a picture of a Bing user';
    this.topText = 'Imagine being IT competent';
    this.bottomText = 'But using BING';
    this.imgURL = 'https://avatars.githubusercontent.com/u/329735?v=4';
    this.description = 'Details';
    this.shadowColor = "true";
  }

  toggleDetails() {
    this.shadowRoot.querySelector('.details').toggleAttribute('open');
  }

  render() {
    return html`
      <div>
        <div class="card" id="card1">
          <h2 id="header">${this.professorName}</h2>
          <h3>By ${this.author}</h3>
          <meme-maker
            top-text="${this.topText}"             
            image-url="${this.imgURL}"
            bottom-text="${this.bottomText}"
          ></meme-maker>
          <details class="details" id="details">
            <summary>${this.description}</summary>
            <div>
              <slot name="bing"></slot>
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('professor-card', ProfessorCard);
