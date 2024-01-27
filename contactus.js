document.getElementById("form-contactus").addEventListener("submit", (event) => {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const region = document.getElementById("region").value;
    const message = document.getElementById("message").value;
    const iagree = document.getElementById("iagree").checked;

    
    if(fullname.length < 1 ) {
        alert("Full name is required");
        return;
    }
    
    if(!email.endsWith("@gmail.com")){
        alert("Your email must ends with @gmail.com");
        return;
    };


    if(region.length < 1 ) {
        alert("Region is required");
        return;
    }

    if(message.length < 1 ) {
        alert("Message is required");
        return;
    }

    if(!iagree) {
        alert("You must agree");
        return;
    }

    alert("Registration Success");
    window.location.href = "public.html";
});

function openNewWindow(url) {
    window.open(url);
  }