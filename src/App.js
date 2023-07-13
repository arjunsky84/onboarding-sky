import { useEffect, useState } from 'react';
import './App.css';
import ContentChef from '@contentchef/contentchef-node';
import axios from 'axios';


const cf = ContentChef({
  spaceId: 'onboarding-fc2e'
},undefined);

function App() {
  const [products, setProducts] = useState([]);
  const [cmsHeader, setCmsHeader] = useState([])
  useEffect(() => {
    const websiteOnlineChannel = cf.onlineChannel('O6YVM6M724ZJLC5ZMH-R', 'example-ch');
    websiteOnlineChannel.content({ publicId: '5pD0Yax93I1' }).then((response) => {setCmsHeader(response?.data?.payload?.header)}).catch((error) => {console.log(error)});
    axios
      .get("https://products-api-kappa.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Content coming from CMS: {cmsHeader}</h1>    
      <div className='card-container'>
      {
        products.map((el) => {
          return(<div className="card">          
          <img src={el.imageUrl} alt="Avatar" style={{"width":"30%", height: "50%"}} />
          <div className="container">
            <h4><b>{el.title}</b></h4>
            <p>Availability : {el.availability}</p>
            <p>Price : £{el.price}</p>                       
          </div>
        </div>)
        })
      }   
      </div>   
      <h1>Static Hello, world!</h1>    
    </div>
  );
}

export default App;
