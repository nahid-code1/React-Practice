export default function Friend({friend}){

    
    return(
        <div className="card">
            <h3>Name: {friend.name} </h3>
            <h4>Email: {friend.email} </h4>
        </div>
    )
}