import React from "react";

const AppCall = () => {
    let name ={
        firstname:"bikash",
        lastname:"kumar",
        printFullName:function(){
            console.log(this.firstname + "" + this.lastname);
        }
    }
    name.printFullName()
    
  return (
    <div>
      <h2>cll,apply,bind</h2>
    </div>
  );
};
export default AppCall;
