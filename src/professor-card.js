import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';

const prof = new URL('../assets/professoro.jpg', import.meta.url).href;

export class ProfessorCard extends LitElement {
  static get properties() {
    return {
      author: {
        type: String,
      },
      professor: {
        type: String,
        reflect: true,
      },
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

      @media screen and (min-width: 800px) {
        .btn {
          visibility: hidden;
        }
      }

      @media screen and (max-width: 500px) {
        .card {
          text-transform: var;
          width: var;
          font-size: 4vw;
        }
      }

      button {
        text-transform: uppercase;
        padding: 8px 8px;
        margin: 10px;
        border: 2px dashed white;
        background-color: #a71c19;
        color: white;
      }

      img {
        margin: 25px;
      }

      /* .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      } */

      button:hover {
        border: 2px dashed #a71c19;
        background-color: white;
        color: #a71c19;
      }

      button:focus {
        border: 2px dashed #a71c19;
        background-color: white;
        color: #a71c19;
      }
    `;
  }

  constructor() {
    super();
    this.author = 'Spenser McLaughlin';
    this.professor = 'Professor Bryan Ollendyke';
  }

  render() {
    return html`
      <div>
        <div class="two">
          <div class="card" id="card1">
            <h2 id="header">${this.professor}</h2>
            <h3>By ${this.author}</h3>
            <img src="${prof}" alt="btopro" />
            <p id="paragraph"></p>
            <button class="btn" id="btn">Details</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('professor-card', ProfessorCard);
