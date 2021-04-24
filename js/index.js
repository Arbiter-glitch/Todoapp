
 let email=document.getElementById("email");
 let pwd=document.getElementById("pwd");

function validate(callback)
{
   
    if(email.value.trim()=="admin" && pwd.value.trim()=="12345")
    {
     callback();
    }
    else 
    {    
         console.log("ERROR"); 
         alert("Invalid username or Password");
         email.value=="";
         pwd.value=="";
        
    }
};
function redirect()
{   
    console.log("status 200");
    $(".login").attr("action","todo.html"); //you can use this jquery command(access:-form attr:action)to redirect as well!
  
};
 function init()
{
    validate(redirect);
};