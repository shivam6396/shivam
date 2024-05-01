const mobileBtn = document.querySelector(".mobile-btn");

// const showAlert = e => {
//    e.preventDefault();
//    return alert("this feters is restriceted");
// }
//  document.addEventListener("contextmenu", showAlert)

const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobileBtn.addEventListener("click", () => toggleNavbar());
// let btn = document.querySelector(".buttons");
// btn.addEventListener('click', () =>{
//    window.location = ("about.html");
   
// })




const PopupBox = document.querySelector(".form-submisson-popup-box");

function showPopup(){
  // window.location.href="index.html";
   PopupBox.classList.add("poupshow");
 
}

// =================  Code for show Program and hide other program ========================


function showdepart(divId){
  window.location.href = `program.html?div=${divId}`;
}
  // Get the divId from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const divId = parseInt(urlParams.get('div'));
  
  // Show the corresponding div and hide others
  if (divId === 1) {
      document.getElementById('depart_ca').style.display = 'block';
      document.getElementById('depart_mag').style.display = 'none';
      document.getElementById('depart_eng').style.display = 'none';
      document.getElementById('depart_edu').style.display = 'none';
      document.getElementById('depart_me').style.display = 'none';
      document.getElementById('depart_bio').style.display = 'none';
      document.getElementById('depart_ph').style.display = 'none';
      
      document.getElementById('depart_cve').style.display = 'none';
      document.getElementById('depart_ee').style.display = 'none';
      document.getElementById('depart_agi').style.display = 'none';
      document.getElementById('depart_low').style.display = 'none';
      document.getElementById('depart_fas').style.display = 'none';
     
     
  } 
  else if (divId === 2){
    document.getElementById('depart_ca').style.display = 'none';
    document.getElementById('depart_mag').style.display = 'none';
    document.getElementById('depart_eng').style.display = 'none';
    document.getElementById('depart_edu').style.display = 'block';
    document.getElementById('depart_me').style.display = 'none';
    document.getElementById('depart_bio').style.display = 'none';
    document.getElementById('depart_ph').style.display = 'none';
   
    document.getElementById('depart_cve').style.display = 'none';
    document.getElementById('depart_ee').style.display = 'none';
    document.getElementById('depart_agi').style.display = 'none';
    document.getElementById('depart_low').style.display = 'none';
    document.getElementById('depart_fas').style.display = 'none';
      
  }
  else if (divId === 3) {
    document.getElementById('depart_ca').style.display = 'none';
    document.getElementById('depart_mag').style.display = 'none';
    document.getElementById('depart_eng').style.display = 'none';
    document.getElementById('depart_edu').style.display = 'none';
    document.getElementById('depart_me').style.display = 'none';
    document.getElementById('depart_bio').style.display = 'none';
    document.getElementById('depart_ph').style.display = 'none';
   
    document.getElementById('depart_cve').style.display = 'none';
    document.getElementById('depart_ee').style.display = 'none';
    document.getElementById('depart_agi').style.display = 'block';
    document.getElementById('depart_low').style.display = 'none';
    document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 4) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'block';
  document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 5) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'block';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 6) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'block';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 7) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'block';
} 
 else if (divId === 8) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'block';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 9) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'block';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 10) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
  
  document.getElementById('depart_cve').style.display = 'block';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 11) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'none';
  document.getElementById('depart_eng').style.display = 'block';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 
 else if (divId === 12) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'block';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 
else if (divId === 13) {
  document.getElementById('depart_ca').style.display = 'none';
  document.getElementById('depart_mag').style.display = 'block';
  document.getElementById('depart_eng').style.display = 'none';
  document.getElementById('depart_edu').style.display = 'none';
  document.getElementById('depart_me').style.display = 'none';
  document.getElementById('depart_bio').style.display = 'none';
  document.getElementById('depart_ph').style.display = 'none';
 
  document.getElementById('depart_cve').style.display = 'none';
  document.getElementById('depart_ee').style.display = 'none';
  document.getElementById('depart_agi').style.display = 'none';
  document.getElementById('depart_low').style.display = 'none';
  document.getElementById('depart_fas').style.display = 'none';
} 




