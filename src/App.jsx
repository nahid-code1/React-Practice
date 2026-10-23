
import './App.css'
import { Counter } from './Counter';
import Items from './Items'

function App() {

  const items = [
    {name: "Console", price: 45000},
    {name: "Bat", price: 900},
    {name: "Bag", price: 1000},
    {name: "Graphics Card", price: 90000},
  ]
    const handleClick = (num) =>{
      const newNum = num + 5;
      alert(newNum);
    }
  return (
    <>

      <button onClick={() => handleClick(10)}>Click me</button>
      <button onClick={()=> alert("Another button has been clicked")}>Click this button</button>

      {
        items.map(item => <Items key={item.price} item = {item}></Items>)
      }

      <Counter></Counter>
    </>
  )
}

export default App
