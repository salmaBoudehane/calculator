import { useState } from "react"

const container={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    height: '80%',
    width: '100%',
    gap: '5px'
}
const firstStyle={
    flex: '1',
    height: '100%',
    display: 'grid',
    gridTemplateColumns:'30% 30% 30%',
    gridAutoRows: 'auto',
    gap: '8px' 
}
const secondStyle={
    padding: '5px',
    flex: '1',
    height: '100%',
    display: 'grid',
    gridTemplateColumns:'50% 50%',
    gridAutoRows: 'auto',
    gap: '8px' 
}
const buttStyle={
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize:'1.5rem',
    backgroundColor: '#3A3A3B',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const buttStyleEqual={
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize:'1.5rem',

    backgroundColor: '#3A3A3B',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

function Buttons(props){
    const [calculation,setCalculation]=useState(" ");
    const handleClick = (value) => {
        if (value === '7' || value === '8' || value === '9' || value === '4' || value === '5' || value === '6' || value === '1' || value === '2' || value === '3' || value === '0') {
            props.inp((prevInput) => prevInput + value);
            setCalculation((prevCalculation) => prevCalculation + value);
          } else if (value === '+') {
            props.inp((prevInput) => prevInput + value);
            setCalculation((prevCalculation) => prevCalculation + '+');
          } else if (value === '-') {
            props.inp((prevInput) => prevInput + value);
            setCalculation((prevCalculation) => prevCalculation + '-');
          } else if (value === 'x') {
            props.inp((prevInput) => prevInput + value);
            setCalculation((prevCalculation) => prevCalculation + '*');
          } else if (value === '/') {
            props.inp((prevInput) => prevInput + value);
            setCalculation((prevCalculation) => prevCalculation + '/');
          } else if (value === '.') {
            props.inp((prevInput) => prevInput + value);
            setCalculation((prevCalculation) => prevCalculation + value);
          } else if (value === '=') {
              const evalResult = eval(calculation);
              props.res(evalResult);
              props.inp(evalResult.toString());
          } else if (value === 'ac') {
            props.inp('');
            setCalculation('');
            props.res(0);
          } else if (value === 'del') {
            props.inp((prevInput) => prevInput.slice(0, -1));
            setCalculation((prevCalculation) => prevCalculation.slice(0, -1));
          }
        };
        return(
            <div style={container}>
                <div style={firstStyle}>
                    <div style={buttStyle} onClick={()=>{handleClick('7')}}>7</div>
                    <div style={buttStyle} onClick={()=>{handleClick('8')}}>8</div>
                    <div style={buttStyle} onClick={()=>{handleClick('9')}}>9</div>
                    <div style={buttStyle} onClick={()=>{handleClick('4')}}>4</div>
                    <div style={buttStyle} onClick={()=>{handleClick('5')}}>5</div>
                    <div style={buttStyle} onClick={()=>{handleClick('6')}}>6</div>
                    <div style={buttStyle} onClick={()=>{handleClick('1')}}>1</div>
                    <div style={buttStyle} onClick={()=>{handleClick('2')}}>2</div>
                    <div style={buttStyle} onClick={()=>{handleClick('3')}}>3</div>
                    <div style={buttStyleEqual} onClick={()=>{handleClick('0')}}>0</div>
                    <div style={buttStyle} onClick={()=>{handleClick('.')}}>.</div>
                </div>
                <div style={secondStyle}>
                    <div style={buttStyle} onClick={()=>{handleClick('del')}}>DEL</div>
                    <div style={buttStyle} onClick={()=>{handleClick('ac')}}>AC</div>
                    <div style={buttStyle} onClick={()=>{handleClick('x')}}>x</div>
                    <div style={buttStyle} onClick={()=>{handleClick('/')}}>/</div>
                    <div style={buttStyle} onClick={()=>{handleClick('+')}}>+</div>
                    <div style={buttStyle} onClick={()=>{handleClick('-')}}>-</div>
                    <div style={buttStyleEqual} onClick={()=>{handleClick('=')}}>=</div>
                </div>
            </div>
        );
    }
    
export default Buttons;