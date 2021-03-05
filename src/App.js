
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {useState} from 'react'
import Home from './components/pages/Home'


function App() {


  const [products,setProducts]=useState([{id:1,name:'hp-w-20',price:44000,img:'',description:"khsdfljlf",quantity:4},

  {id:2,name:'hp-w-20',price:44000,img:'',description:"Nothing",quantity:4},

  {id:3,name:'hp-w-20',price:44000,img:'',description:"Nothing",quantity:4},
  {id:4,name:'hp-w-20',price:44000,img:'',description:"nothing",quantity:4},
  
  
  ])


  return (


    <>


     <NavBar/>

     <Home  products={products}/>
       
       
    </>
    
  );
}

export default App;
