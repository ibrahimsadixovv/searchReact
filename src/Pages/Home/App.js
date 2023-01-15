
import './App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  

  const [items, setItems] = useState([])
  const [search, setSearch] = useState(" ")

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products",).then((response) => {
    if (search) {
      const filter= response.data.filter((x)=>{
        return x.name
        .toLowerCase()
        .includes(search.toLowerCase())
      })
      setItems(filter)
    }
    else {
       
      setItems(response.data)
    }})
  }, [search])


  return (
    <div className="App">    
 <div className='search'>
  <input type="text" onChange={(e) =>{const value = e.target.value
  setSearch(value)}}></input>
</div>
      <div className='boxes'>
 {items?.map((card) =>{
  return (

    <div className='box'>
      
      <h2 className='name'> {card.name}  </h2>
      
      <p className='price'> {card.unitPrice} <b>$</b></p>
      
    <Link to={ "/product/" + card.id  } class="cardButton" href="#">  Open  </Link> 
    </div>
   
  )
 })}
 </div>
    </div>
  );
}



export default App;
