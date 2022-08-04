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
        //uc3
        const phoneNumber=document.querySelector('#Telephone')
        const phoneNumber_error=document.querySelector('.error-telephone')
        phoneNumber.addEventListener('input',function()
        {
            let phoneNumberRegex=RegExp(("^[0-9]{2}\\s[0-9]{10}$"));
            if(phoneNumberRegex.test(phoneNumber.value))
            {
                phoneNumber_error.innerHTML="";
            }
            else{
                phoneNumber_error.innerHTML="phoneNumber is invalid"
            }
        });
        const teleNumber=document.querySelector('#Number')
        const teleNumber_error=document.querySelector('.error-number')
        teleNumber.addEventListener('input',function()
        {
            let teleNumberRegex=RegExp(("^[0-9]{10}$"));
            if(teleNumberRegex.test(teleNumber.value))
            {
                teleNumber_error.innerHTML="";
            }
            else{
                teleNumber_error.innerHTML="telephoneNumber is invalid"
            }
        });
        //uc4-5
        const pwd=document.querySelector('#Password');
        const pwd_error=document.querySelector('.error-pwd');
        pwd.addEventListener('input',function()
        {
            let pwdRegex=RegExp("^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$");
            if(pwdRegex.test(pwd.value))
            {
                pwd_error.innerHTML="";
            }
            else
            {
                pwd_error.innerHTML="Password is Invalid";

            }

        });
        //uc6-salary
        var salaryInput=document.querySelector('#Salary')
        var salaryerror=document.querySelector('.salary-output');
        salaryerror.textContent=salaryInput.value;
        salaryInput.addEventListener('input',function()
        {
            salaryerror.textContent=salaryInput.value;
        });
        
    
        