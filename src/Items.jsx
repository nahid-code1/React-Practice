

const Items = ({item}) => {
    console.log(item)
  return (
    <div>
        <p>Name: {item.name}</p>
        <p>Price: {item.price} </p>
    </div>
  )
}

export default Items