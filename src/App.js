import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleClick1 =()=>{
    setCount(count+1)
  }

  const handleClick2 =()=>{
    if(count > 0){
    setCount(count-1)
    }
  }

  const handleClick3 = () =>{
    setCount(0);
  }

  return (
    <div className="App">
        <h2 className='head'><span className='highlight1'>||</span>ReactJS Counter<span className='highlight2'>||</span></h2>
      <div className='container'>
            <div className='right'>
            <svg onClick={handleClick3} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="17" height="17"><path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z"/></svg>   
            </div>          
            
            <div className='total_amount_card'>
              <h3 className='total_amount'>{count}</h3>
            </div>

            {/* buttons */}
            <form>
              <div className='myButtons'>
              <Stack spacing={2} direction="row">
              <Button onClick={handleClick1} variant="contained" className='btnOne'>+</Button>
              <Button onClick={handleClick2} variant="contained" className='btnTwo'>-</Button>
              </Stack>
              </div>
            </form>
      </div>
    </div>
  );
}

export default App;
