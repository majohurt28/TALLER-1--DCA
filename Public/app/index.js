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
data.forEach((card)=> {
this.shadowRoot.innerHTML += `
<custom-card video="${card.thumbnail}" name="${card.name}" profile="${card.profile}" views="${card.description.views}" date="${card.description.date}">
</custom-card>
`;
})
}
}
customElements.define("app-container",Container);

