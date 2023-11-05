import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";
const body={
  height: '100vh',
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const calculator={
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: '#8E8B87',
  padding: '15px',
  height:'500px',
  width: '400px'
}

function App() {
  const [input,setInput]=useState(" ");
  const [result,setResult]=useState(0);
  return (
    <div style={body}>
    <div style={calculator}>
      <Display inp={input}/>
      <Buttons inp={setInput} res={setResult} />
    </div>
    </div>
  );
}

export default App;
