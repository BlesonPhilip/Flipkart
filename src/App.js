import Header from './Header';
import { Data } from "./Data";
import Card from './Card';
function App() {
  return (
    
    <div className="App">
      <Header />
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {Data.map((item)=>(
        <>    
        {/* <img style={{objectFit:'contain',width: "100px" ,padding:"10px" ,backgroundColor:'red'}} src={item.image} alt="images" /> */}
        {/* <p>{item.name}</p> */}
        <Card image={item.image} 
              offerPrice = {item.offerPrice}
              actualPrice = {item.actualPrice}
              rating = {item.rating}
              name = {item.name} />
        </>
      
      ))}
      </div>
      
    </div>
  );
}

export default App;
