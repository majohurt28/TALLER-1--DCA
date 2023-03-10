class Card extends HTMLElement{
    static get  observedAttributes(){
        return["video","name","profile","description"]

    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

    }

    render(){
        this.shadowRoot.innerHTML =`
        <section>
        <img>${this.video}</img>
        <p1><strong>${this.name}</strong></p1>
        <h2>${this.profile}</h2>
        <h2>${this.description}</h2>

        </section>`
    }
}