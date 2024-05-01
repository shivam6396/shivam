const form = document.querySelector("form");
const username = document.getElementById("username");
const usermail = document.getElementById("usermail");
const phone = document.getElementById("phone");
const userMessage = document.getElementById("usermessage");
const allInput = document.querySelector('input')


// const email = document.querySelector(".email").value;
function sendEmail(){
  const bodyMessage = `Name : ${username.value} <br>  Email : ${usermail.value} <br> Phone : ${phone.value} <br> Message : ${userMessage.value}`
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "r3067677@gmail.com",
      Password : "594037FD17D074CB2293E160865F6848560B",
      To : 'shivam6396649085yadav@gmail.com',
      From : "r3067677@gmail.com",
      Subject : "Invertis New Enquery",
      Body : bodyMessage
    }).then(
    message =>{
        
         if(message =="OK"){
          Swal.fire({
            title: "Succed",
            text: "Message sent Succesfully!",
            icon: "success"
          })
          ;
          
         }
    }
    );
}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
   
  sendEmail();
  form.reset();

})



