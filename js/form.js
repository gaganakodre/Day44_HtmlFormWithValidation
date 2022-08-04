
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
        
    
        