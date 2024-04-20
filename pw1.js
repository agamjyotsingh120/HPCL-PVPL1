function addUser(){
    var username = document.getElementById("user_name").value;// variable username will be taken as the value of username
var password = document.getElementById("password").value;// variable password will get the value as password
    if(username === 'PVPL' && password === 'HPCL'){// using if statement if username = PVPL and password = HPCL the location will change to the next pg.
 window.location = 'index.html'

    }else{
        alert('Invalid Username or Password');// using else function it will show that the password is incorrect
    }
}

addUser();