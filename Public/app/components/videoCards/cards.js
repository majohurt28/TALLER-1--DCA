
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
        
            <section class="videoCard">
                    <spam class="card">
            
                    <img class="video" src="${this.thumbnail}"</img>
                    <p1><strong>${this.name}</strong></p1>
                    <h2>${this.profile}</h2>
                    <h2>${this.views}vistas-hace${this.date}</h2>
                    </spam>
        

            </section>
    
        `;
    }
}

customElements.define("custom-card", Card);
export default Card;
