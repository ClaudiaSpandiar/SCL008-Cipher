window.cipher = {
  encode: (offset1,messageEncode) => {
    let solved = "";
  
  
    for (let i=0; i < messageEncode.length; i++){
     let asciinum = messageEncode.charCodeAt(i);
     if (asciinum >= 65 && asciinum <= 90){
     let ascii = ((asciinum - 65 + offset1) % 26 + 65);
      solved += String.fromCharCode(ascii);
     }else if (asciinum >= 97 && asciinum <= 122){
     let ascii2 = ((asciinum - 97 + offset1) % 26 + 97);
      solved += String.fromCharCode(ascii2);
     }else {
      solved += messageEncode;
        }

    }

    return solved;
  },
  decode: (offset2,messageDecode) => {
    let solved1 = "";
    
  
    for (let i=0; i < messageDecode.length; i++){
     let asciinum1 = messageDecode.charCodeAt(i);
     if (asciinum1 >= 65 && asciinum1 <= 90){
     let ascii1 = ((asciinum1 + 65 - offset2) % 26 + 65);
      solved1 += String.fromCharCode(ascii1);
     }else if (asciinum1 >= 97 && asciinum1 <= 122){
      let ascii3 = ((asciinum1 - 71 - offset2) % 26 + 97);
       solved1 += String.fromCharCode(ascii3);
      }else {
      solved1 += messageDecode;
        }

    }
    return solved1;
  }
};
