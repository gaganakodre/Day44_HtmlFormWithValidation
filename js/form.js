        //uc1
        const text=document.querySelector('#Name');
        const error=document.querySelector('.error');
        text.addEventListener('input',function()
        {
            let nameRegex=RegExp("^[A-Z]{1}[a-z]{2,}$");
            if(nameRegex.test(text.value))
            {
                error.textContent="";
            }
            else
            {
                error.textContent="Name is Invalid";

            }

        });
        //uc2
        const email=document.querySelector('#Email')
        const error_email=document.querySelector('.error-email')
        email.addEventListener('input',function()
        {
            let emailRegex=RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
            if(emailRegex.test(email.value))
            {
                error_email.textContent="";
            }
            else{
                error_email.textContent="email is invalid"
            }
        });
        
    
        