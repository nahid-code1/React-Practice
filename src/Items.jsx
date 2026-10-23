import "./App.css"

const Items = ({item}) => {

  return (
    <div className="card">
        <p>Name: {item.name}</p>
        <p>Price: {item.price} </p>
    </div>
  )
}

export default Items