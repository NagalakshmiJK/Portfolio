const form = document.querySelector('#form')
const email = document.querySelector('#email')
const Message = document.querySelector('#Message')
form.addEventListener('submit',(e)=>{
    if(!validation())
    {
        e.preventDefault()
    }
})

function validation(){
    let success=true
    const emailval = email.value.trim()
    const messageval = Message.value.trim()
    if(emailval==='')
    {
        success=false
        setError(email,'Please type Your Email id')
    }
    else if(!validateEmail(emailval)){
        success=false
        setError(email,'Please Enter Your Valid Email')
    }
    else{
        setSucess(email)
    }

    if(messageval==='')
    {
        success=false
        setError(Message,'Please Write Some Message')
    }
    else if(messageval.length<20)
    {
        success=false
        setError(Message,' Atleast 20 char Must been available ')
    }
    else{
        setSucess(Message)
    }
    return success
}

function setError(element,message){
    const field = element.parentElement;
    const errorElement = field.querySelector('.error');
    
    errorElement.innerText = message;
    field.classList.add('error')
    field.classList.remove('success')
}
function setSucess(element){
    const field = element.parentElement;
    const errorElement = field.querySelector('.error');
    
    errorElement.innerText = '';
    field.classList.add('success')
    field.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
    .match(
        /^([a-z0-9._])+\@+([a-z])+\.([a-z])+$/
    )
}
