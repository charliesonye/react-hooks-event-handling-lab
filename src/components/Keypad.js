// Code Keypad Component Here



function Keypad(){

    function printPasswordProcess(){
        console.log("Entering password...")
    }
    return(
        <input type="password" onChange={printPasswordProcess}></input>
    )
}

export default Keypad;