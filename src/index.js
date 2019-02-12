//Diferentes pantallas
document.getElementById("home1").addEventListener("click", () => {
    document.getElementById("home").style.display="block";
    document.getElementById("encrypt1").style.display="none";
    document.getElementById("decode1").style.display="none";
} )
  
document.getElementById("encrypt").addEventListener("click", () => { 
    document.getElementById("home").style.display="none";
    document.getElementById("encrypt1").style.display="block";
    document.getElementById("decode1").style.display="none";
  } )
  
document.getElementById("decode").addEventListener("click", () => {
    document.getElementById("home").style.display="none";
    document.getElementById("encrypt1").style.display="none";
    document.getElementById("decode1").style.display="block";
  } )

  document.getElementById("home2").addEventListener("click", () => {
    document.getElementById("home").style.display="block";
    document.getElementById("encrypt1").style.display="none";
    document.getElementById("decode1").style.display="none";
} )
  
  //mensaje cifrado
document.getElementById("encode").addEventListener("click", () => {
    let messageEncode = document.getElementById("encryptxt").value;
    let offset1 = parseInt(document.getElementById("offsetEncode").value);

  document.getElementById("result1").innerHTML = cipher.encode(offset1,messageEncode);
  })

  //mensaje descifrado
 document.getElementById("decode2").addEventListener("click", () => {
    let messageDecode = document.getElementById("decodetxt").value;
    let offset2 = parseInt(document.getElementById("offsetDecode").value);
  
  document.getElementById("result2").innerHTML = cipher.decode(offset2,messageDecode);
  })
  