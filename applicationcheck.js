const email = document.getElementById("email")
const message = document.getElementById("Message")
const mailerror = document.getElementById("mailerror")
const messageerror = document.getElementById("messageerror")
const mail = /^([a-z0-9._])+\@+([a-z])+\.([a-z])+$/

function check(){
    var emailtext = email.value 
    var messagetext = message.value
    if(emailtext === "")
    {
        mailerror.textContent = "Please type Your Mail id"
        return false
    }
    else if(!mail.test(emailtext))
    {
        mailerror.textContent = "Invalid Email"
        return false
    }
    else if(mail.test(emailtext)){
        mailerror.textContent = ""
    }

    if(messagetext === "")
    {
        messageerror.textContent = "Plese type Something Message"
        return false
    }
    else if(messagetext.length<20)
    {
        messageerror.textContent = "Atleast 20 character minimum available"
        return false
    }
}

