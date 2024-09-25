import './App.css';
import data from './Component/data';
import Tours from './Component/Tours';
import { useState } from 'react';
function App() {
  const[tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours=tours.filter(tour=>tour.id!==id)
    setTours(newTours)
   }

   if(tours.length===0){
      return(
        <div className='white'>
          <h1>No Tours Left</h1>
          <button className='btn-red' onClick={()=>setTours(data)}>Refresh</button>
        </div>  
        )}
  return (
   <div className='App'>
    
    <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  );
}

export default App;
