var elForm = document.querySelector(".form");
var elInput = document.querySelector(".point");
var elBtn = document.querySelector(".btn");
var elSelect = document.querySelector(".sel-ins");
var elInstitut = document.querySelector(".output");

var nameIns = ["TATU", "Moliya", "SAMPI", "INHA", "TDTU"];
var costTATU = 101;
var costMoliya = 146;
var costSAMPI = 150;
var costINHA = 206;
var costTDTU = 163;
var elInputVal = elInput.value
var noEnter = "Iltimos keyingi safar urinib ko'ring, Siz O'qishga kirmadingiz"
var  enter = "Tabriklaymiz! O'qishga kirdingiz"

for(var nameUni of nameIns){
  var newOption = document.createElement("option");
  newOption.textContent = nameUni;
  newOption.value = nameUni; 
  elSelect.append(newOption);
}

  

elBtn.addEventListener("click", function(e){
  e.preventDefault()
  
  if(elInputVal < costTATU) {
    elInstitut.textContent = enter ;  
  }else{
    elInstitut.textContent = costTATU + " O'tish bali" + noEnter;  
  }
  if(elInputVal > costMoliya){
    elInstitut.textContent = enter;  
  }else{
    elInstitut.textContent = noEnter;  
  }
  if(elInputVal > costINHA){
    elInstitut.textContent = enter;  
  }else{
    elInstitut.textContent = noEnter;  
  }
  if(elInputVal > costTDTU){
    elInstitut.textContent = enter;  
  }else{
    elInstitut.textContent = noEnter;  
  }
  if(elInputVal > costSAMPI){
    elInstitut.textContent = enter;  
  }else{
    elInstitut.textContent = noEnter;  
  }

  
    
  
} )
 
