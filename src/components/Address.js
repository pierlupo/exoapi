export default function Address(props){
    const {street,postCode,city} = props.adresse
    return(
        <>
            <p><strong>Rue :</strong> {street}</p>
            <p><strong>Code Postal :</strong> {postCode}</p>
            <p><strong>Ville :</strong> {city}</p>
        </>
    )
}