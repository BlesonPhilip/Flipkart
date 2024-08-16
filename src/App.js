import Header from './Header';
import { Data } from "./Data";

function App() {




  return (
    
    <div className="App">
      <Header />
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {Data.map((item)=>(
        <>
      
        <img style={{objectFit:'contain'}}width="100" padding="10px" src={item.image} alt="images" />
        <p>{item.name}</p>
        </>
      
      ))}
    
              
            
      </div>
    </div>
  );
}

export default App;
