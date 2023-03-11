
class Card extends HTMLElement{
    static get  observedAttributes(){
        return["thumbnail","name","profile","views","date"]
        
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
        
    }
    
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }
    
    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet"  href="./app/components/videoCards/cards.css">
            <div class="card">
                <img class="imag" src="${this.thumbnail}">
                <p1><strong>${this.name}</strong></p1>
                <h2>${this.profile}</h2>
                <h2>${this.views}vistas-hace${this.date}</h2>
            </div>        
        `;
    }
}

customElements.define("custom-card", Card);
export default Card;
