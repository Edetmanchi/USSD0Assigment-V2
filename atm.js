   let accountBal=20000;
        //Loop {WHile loop}
        let PIN= Number(prompt("Enter PIN to continue"))
        if(PIN.length != 4){
          alert("Invalid Pin")
          
        } else{
          alert ("Welcome to Zenith Bank");
        }
        
        
        //Choose type of transaction
        let transaction= +prompt(`MAIN MENU
      
        1.Account balance                2. Withdrawal               
       3. PIN Change          4.Transfer Cash`);
      
        //If user chooses  1
        if(transaction=="1") {
          prompt(`Please Select 
      
          1.Savings
      
          2.Current`);
          alert(`Your Account Balance is ${accountBal}`)
        }
          //If user chooses 2
        else if(transaction=="2"){
          let option= Number(+prompt(`Please choose amount
          1.N1000                  2.N5000
      
          3.N10,000                4.N50,000
          
          5.Other amount`))
      
          alert("Withdrawal Successful")
      
          if (option=="5") {   //if user chooses 5 
            prompt(`please input  amount`);
            alert(`Transaction Successful.Please Take Your Cash.`)
          } 
          }
      
           //If user chooses 3
          else if(transaction=="3"){
          prompt(`Please Enter Recipient Number`);
          prompt(`Please Enter Amount`);
          prompt(`ENter PIN`)
          alert(`Transaction Successful`)
        }
            //If user choose 4
          else if(transaction=="4"){
      
          //Loop through
          let prevPin= Number(prompt("Enter old pin to continue"))
          while(prevPin.length !== 4){
            alert("Invalid Pin")
            
          }
          prompt(`Please Enter New Pin`);
          prompt(`Please Re-enter New Pin`);
          alert(`Pin Successfully Changed`)
        }
             //If user chooses 5
          else if(transaction=="5"){
            //loop through
            let amount= Number(+prompt("Please Enter Amount"))
          while(amount>50000){                             
            alert("Try again tomorrow. You have a Limit of N50,000 Cash Transfer Per Day!")
            amount = prompt("Please enter amount")
          }
          +prompt(`Please Enter Recipient Account Number`);
          +prompt(`PLEASE CHOOSE BANK
      
          1.Access
      
          2.UBA
      
          3.Fidelity
      
          4.GTB`);
          alert(`Transfer Successful`)
        }
        else { 
          alert(`Something went wrong`)
        }