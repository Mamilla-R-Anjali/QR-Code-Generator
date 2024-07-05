const qrtext= document.getElementById('qrtext');
const qrbutton= document.getElementById('left');
const qrimage= document.getElementById('qrimage');
 function  handleSubmit(event){
    event.preventDefault();
    const input= qrtext.value;

if(!input){
    alert('Please enter valid input');
}
else{
qrimage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input;
}
}
qrbutton.addEventListener('click', handleSubmit);