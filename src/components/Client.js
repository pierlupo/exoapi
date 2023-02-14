import Address from "./Address"

export default function Client(props) {
    const {firstName,lastName,phone,address} = props.client
return(

<>  

    <div className="conteneur">
    
    <div className="conteneur_client">
        
   <p><strong>Prénom :</strong> {firstName}</p>
   <p><strong>Nom :</strong> {lastName}</p>
   <p><strong>Tel :</strong> {phone}</p>
   <Address adresse={address}></Address>
    
    </div>

    </div>
</>
)
}