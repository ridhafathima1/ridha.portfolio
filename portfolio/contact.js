function sendMail(){
    var params={
        name:document.getElementById("ridha").value,
        email:document.getElementById("emails").value,
        subject:document.getElementById("subjects").value,
        meassage:document.getElementById("messages").value,

    };


const serviceID="service_asroj28";
const templateID="template_w47ajbu";


emailjs.send(serviceID,templateID,params)
.then(
     (res) =>{
         alert("your message sent successfully");
     
        document.getElementById("ridha").value=" ";
         document.getElementById("emails").value=" ";
          document.getElementById("subjects").value=" ";
           document.getElementById("messages").value=" ";
           console.log(res);}
          
)
.catch(err=>console.log(err));
}