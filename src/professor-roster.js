import { LitElement, html, css } from 'lit';
import "./professor-card.js";

export class ProfessorRoster extends LitElement {
    static get tag() {
        return 'professor-roster';
    }
    static get properties() {
        return {
            professors: { type: Array },
            school: { type: String }
        }
    }

    constructor() {
        super();
        this.professors = [];
        this.school = 'Penn State';
        this.updateRoster();
    }

    updateRoster() {
        const address = '../api/roster';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.professors = data;
        });
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid overscroll-behavior-block;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.school}</h2>
        <div class="wrapper">
            ${this.professors.map(professor => html`
            <div class="item">
                <professor-card author="${professor.author}" professorName="${professor.professorName}" funFact="${professor.funFact}" topText="${professor.topText}" bottomText="${professor.bottomText}" imgURL="${professor.imgURL}"  description="${professor.description}"  shadowColor="${professor.shadowColor}"></professor-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(ProfessorRoster.tag, ProfessorRoster);