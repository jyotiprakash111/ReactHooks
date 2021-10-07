import React from "react";

const AppCall = () => {
    let name ={
        firstname:"bikash",
        lastname:"kumar",
       
    }
    let printFullName = function(Hometown, state){
        console.log(this.firstname + " " + this.lastname + " " +  Hometown + " " + state);
    }
    printFullName.call(name, "Hometown", "odisha")

    // function borrowing

   let  name2 = {
        firstname:"sachin",
        lastname:"Tendulkar" + " " + "kumar",
    }
    // function borrowing
    printFullName.call(name2, "Nasik");
    printFullName.apply(name2, ["nasik","bhubaneswar"])
    
    // bind
    let printMyname = printFullName.bind(name2, "mumbai","delhi")
    console.log(printMyname)
    printMyname()
  return (
    <div>
      <h2>call,apply,bind</h2>
    </div>
  );
};
export default AppCall;
