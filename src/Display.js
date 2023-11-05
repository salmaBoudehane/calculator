const displayStyle={
    backgroundColor: 'white',
    color: 'black',
    border: '3px solid black',
    fontSize: '3rem',
    textAlign: 'center',
    height: '20%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems:'center'
}

function Display(props){
    return(
        <div style={displayStyle}>
            {props.inp}
        </div>
    );
}
export default Display;