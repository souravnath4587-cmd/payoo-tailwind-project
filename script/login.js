
document.getElementById('login-btn').addEventListener('click', function(){
        // 1-> Get the mobile number 
        const inputNumber = document.getElementById('input_number');
        const contactNumber = inputNumber.value;
        console.log(contactNumber);
        
        // 2-> Get the pin input
         const pinNumber = document.getElementById('input_pin');
        const pin = pinNumber.value;
        console.log(pin);
        // 3-> match pin and mobile number
        if(contactNumber == '01799052958' && pin == '1234'){
            alert('Login Successfully...')
            // window.location.replace('/home.html');
            window.location.assign('../index.html');
        }else{
            alert("Login Failed...")
            return;
        }
        // 3-1-> true : > alert > homepage;
        // 3-2-> false : > alert > return login page;

})