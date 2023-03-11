import * as videoCards from "./components/index.js"
import data from "./data.js"

class Container extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){

        const cards = data.map((card) =>
            `<custom-card thumbnail="${card.thumbnail}" name="${card.name}" profile="${card.profile}" views="${card.description.views}" date="${card.description.date}">
            </custom-card>`
        )

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet"  href="./app/components/videoCards/cards.css">
        <div class="cont">${cards.join("")}</div>`

        
        // data.forEach((card)=> {
        //     this.shadowRoot.innerHTML += `
        //     <custom-card thumbnail="${card.thumbnail}" name="${card.name}" profile="${card.profile}" views="${card.description.views}" date="${card.description.date}">
        //     </custom-card>
        //     `;
        // })
    }
}
customElements.define("app-container",Container);

