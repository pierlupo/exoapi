import { Component } from "react"
import { getInfoApiZip } from "../services/data.service"
import Client from "./Client"


export class DataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        // getData().then(data => {
        //     this.setState({ data : data})
        // })
        getInfoApiZip().then(res => {
            console.log(res.data)
            this.setState({ data : [...res.data]})
        })
    }


    render(){
        return(
            <>
            <h1>Liste des Contacts</h1>
            <div>
                {/* {this.state.data.length == 0 ? <div>En cours de chargement ....</div>:(<div>{this.state.data.map((e,i) => (<div key={i}>{e.lastName}</div>))}</div>)} */}
                {this.state.data.length == 0 ? <div>En cours de chargement ....</div>
                :
                (<div>{this.state.data.map((e,i) => (<Client key={i} client={e}></Client>))}
                </div>)
                }
                {/* {this.state.clients.map((client) => (<Liste client={client} key={client.id}></Liste>))} */}
            </div>
            </>
        )
    }
}




