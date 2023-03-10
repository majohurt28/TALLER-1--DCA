import * as videoCards from "./components/index.js"
import data from "./data.js"
class VideoContainer extends HTMLElement {
Constructor(){
Super();
This.attachShadow({mode: 'open'});
}
connectedCallback(){
this.render();
}
render(){
data.forEach((card)=> {
this.shadowRoot.innerHTML += `
<My-card video="${card.img}" name="${card.name}" profile="${card.profile}" views="${card.description.views} date="${card.description.date}>
</My-card>
`
})
}
}
customElements.define("Video-container",VideoContainer);

