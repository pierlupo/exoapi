import { Component } from "react";


export class Formulaire extends Component {
    constructor(props){
        super(props)
        this.state = {
           client : {
           firstname : "",
           name : "",
           phone : "",
           address: {
            street : "",
            postCode :"",
            city : ""
           }

        } 
    }
}



    submitForm = (e) => {
        //Envoyer un objet qui possède un nom et un prénom
        e.preventDefault()
        //console.log("coucou");
        const monClientValid = {...this.state.client}
        this.props.addClient(monClientValid)
        console.log(monClientValid);
        this.setState({client : { firstname :"", name :"", phone : "", address: {street : "",postCode :"",city : ""}}})
        e.target.reset();
    }

    fieldsOnChangeClient = (e) => {
            console.log("e.target.name :",e.target.name)
            console.log("e.target.getAttribute`name` :",e.target.getAttribute("name"))
            const tmpClient = {...this.state.client}
            tmpClient[e.target.getAttribute("name")] = e.target.value
            //console.log(tmpClient)
            this.setState({client : {...tmpClient}})
    }

    fieldsOnChangeClientAddress = (e) => {
        console.log("e.target.name :",e.target.name)
        console.log("e.target.getAttribute`name` :",e.target.getAttribute("name"))
        const tmpClient = {...this.state.client}
        tmpClient.address[e.target.getAttribute("name")] = e.target.value
        //console.log(tmpClient)
        this.setState({client : {...tmpClient}})
}

    
    render(){

        return(

            <>

            <h1>Mon Formulaire Client</h1>
            <div className="formu">
            <form onSubmit={this.submitForm}>

            <label>votre nom : </label>
            <input type="text" onChange={this.fieldsOnChangeClient} name="nom"></input>
            <label>votre prénom : </label>
            <input type="text" onChange={this.fieldsOnChangeClient} name ="prenom"></input>
            <label>votre Tel : </label>
            <input type="text" onChange={this.fieldsOnChangeClient} name ="tel"></input>
            <label>votre rue : </label>
            <input type="text" onChange={this.fieldsOnChangeClientAddress} name ="rue"></input>
            <label>votre Code Postal : </label>
            <input type="text" onChange={this.fieldsOnChangeClientAddress} name ="cp"></input>
            <label>votre Ville : </label>
            <input type="text" onChange={this.fieldsOnChangeClientAddress} name ="ville"></input><br></br>
            <button>Envoyer</button>

            </form>
            </div>

            </>
        )
    }
}