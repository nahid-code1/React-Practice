
import { Suspense } from 'react';
import './App.css'
import { Counter } from './Counter';
import Items from './Items'
import { User } from './User';
import { Friends } from './Friends';

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

    const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());


    const fetchFriends = async()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      return res.json();
    }
    const friendsPromise = fetchFriends();

  return (
    <>
      
    <Suspense fallback={<h5>Friends are loading.....</h5>} >
      <Friends friendsPromise = {friendsPromise} ></Friends>
    </Suspense>

      <Suspense fallback={ <h3>Loading....</h3>} >
          <User users = {users}></User>
      </Suspense>
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
