
import { useEffect, useState } from 'react';
import axios from 'axios';

function Data() {

    const [data, setData] = useState([])
  
  
  
    useEffect(() => {
      axios.get("https://northwind.vercel.app/api/products",).then(response => {
        setData(response.data)
      })
    }, [])
  
  
  
    return (
      <div className="App">    
  <Search/>
        <div className='boxes'  >
        {data.map(x => <Card   key={x.id}  data={x} >  </Card>)}
  
        </div>
   
      </div>
    );
  }
  
  function Card(props) {
    return (
     
      <div className='box'>
        
        <h2 className='title'> {props.data.name}  </h2>
        
        <p className='price'> {props.data.unitPrice} <b>$</b></p>
        
      <Link to={ "/product/" + props.data.id  } class="cardButton" href="#">  Open  </Link> 
      </div>
    )
  }
  
export default Data
