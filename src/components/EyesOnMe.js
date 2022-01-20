// Code EyesOnMe Component Here

function EyesOnMe(){
function changeFocus(){
    console.log('Good!')
}
function changeBlur(){
    console.log('Hey! Eyes on me!')
}

    return(
        <button onFocus={changeFocus} onBlur={changeBlur}>Eyes on Me</button>
    )
}

export default EyesOnMe;