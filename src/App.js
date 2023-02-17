
import Data from './nftmeta.json'

function App() {
  
  return (    
      <div>
      {
        Data.map((ele)=>{
          return(
            <h1>{ele.id}</h1>
          )
        })
      }
      </div>
    );
}

export default App;
