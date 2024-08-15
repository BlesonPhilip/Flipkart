import Header from './Header';
import header from './Header.css';
import { Data } from "./Data";
function App() {
  return (
    
    <div className="App">
      <Header />
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {
       Data.map((item) =>(
       <>
       <img 
        style={{objectFit: "contain" }}
         width="100" 
         src={item.image} alt="images" />
      <p>{item.name}</p>
      </>
    ))
    }
    </div>
    </div>
  );
}

export default App;
