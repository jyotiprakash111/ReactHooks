let name = {
    firstname:"bikash",
    lastname:"kumar",
    printFullName: function(){
        console.log(this.firstname + " " + this.lastname);
    }
}

name.printFullName();   

let name2 ={
    firstname:"sachin",
    lastname:"Tendular"
}

name.printFullName.call(name2) // this is called borrow function from other methods

// O/P - bikash kumar
//     - sachin Tendular

let name = {
    firstname:"bikash",
    lastname:"kumar",
  
}
let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " From " + hometown + " state " + state);
}

printFullName.call(name, "cuttack", "odisha");   

printFullName.apply(name, ["cuttack", "odisha"]);   

let printMyname = printFullName.bind(name2, "cuttack", "odisha");   
console.log(printMyname);
printMyname();

// bind and call is a method which created a copy and can be onvoked later.
// call - which invokes the method directly

let name2 ={
    firstname:"sachin",
    lastname:"Tendular"
}
printFullName.call(name2) 
// this is called borrow function from other methods