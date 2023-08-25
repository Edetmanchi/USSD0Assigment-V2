let bal=10000;
    
    let transaction= +prompt
   
     (`CHOOSE YOUR TRANSACTION
     
       1.Airtime Self
       2.Airtime Others
       3.Transfer to Zenith
       4.Transfer Other banks`)
  
       //If user chooses 1
     if (transaction=="1"){
  
      //while loop 
      let rechargeAmount= Number(+prompt("Please Enter Amount"))
      while(rechargeAmount< bal){                             
        alert("Insuffient Funds")
        amount = prompt("Please enter amount")
      }
         }
  
     //If userchoose 2
    else if (transaction=="2") {
  
    //while loop for purchase less than Balance {
      let amount= Number(+prompt("Please Enter Amount"))
      while(amount>bal){                              
        alert("Insuffient Funds")
        amount = prompt("Please enter amount")
      }
      //while loop for correct pin
      let PIN= Number(prompt("Enter PIN to continue"))    
    while(PIN.length !== 4){
      alert("Incorrect Pin")
      Pin = prompt("Enter correct PIN to continue")
    }
      alert (`Transaction successful.`)
  }
  
        //If user chooses 3
    else if(transaction=="3") {
  
          let amount= Number(+prompt("Please Enter Amount"))
      while(amount>bal){                             
        alert("Insuffient Funds")
        amount = prompt("Please Enter Amount")
      }
      prompt(`Please Enter Recipient Account Number`);
  
      
      let PIN= Number(prompt("Please Enter Your PIN"))
    while(PIN != 1100){
      alert("Incorrect PIN")
      PIN = prompt("Enter Correct PIN To Continue")
    }
      alert (`Transfer Successful.`)
    }
  
  
    //If user chooses 4
    else if(transaction=="4") {
      let amount= Number(+prompt("Please Enter Amount")) 
      while(amount>bal){                               
        alert("Insuffient Funds")
        amount = prompt("Please enter amount")
      }
      prompt(`Please Enter Recipient Account Number`);
      prompt(`Please Choose Bank
  
      1.GTB
      2.Keystone
      3.Fidelity
      4.Sterling`);
  
  
      let Pin= Number(prompt("Enter PIN To continue"))
    while(Pin.length !== 4){
      alert("Incorrect Pin")
      Pin = prompt("Enter Correct PIN To continue")
    }
      alert (`Transfer Successful.`)
    }
    else {
      alert('SOmething went wrong')
    }