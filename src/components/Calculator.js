import React, {useState} from "react"
const Calculator=()=>{
    // use useState for msg , result or color
    let [res,setValue]=useState({msg:'',resvalue:'',color:''});
    //function for validate input values
    function validatevalu(){
        //value of inputs
        let a= document.getElementById('Num1').value;
        let b=document.getElementById('Num2').value;
       console.log(a,b);
        //checking if a and b are valid or not
        if(a===''){ setValue({msg:'Error',resvalue:'Num1 cannot be empty',color:'red'}); return false}
       else if(b===''){ setValue({msg:'Error',resvalue:'Num2 cannot be empty',color:'red'}); return false;}
        else if(isNaN(a)){ setValue({msg:'Error',resvalue:'Num1 is not a number',color:'red'});  return false;}
        else if(isNaN(b)){setValue({msg:'Error',resvalue:'Num2 is not a number',color:'red'}); return false;}
        else { return true; }
    }
    // to find a result 
    function solution(task){

        let a= parseInt(document.getElementById('Num1').value);
        let b=parseInt(document.getElementById('Num2').value);
        let ans=0;
        if(task==='+'){
            ans=a+b;}
        else if(task==='-'){
            ans=a-b;}
        else if(task==='*'){
            ans=a*b;}
        else if(task==='/'){
            ans=a/b;}
         setValue({msg:'Success',resvalue:`Result- ${ans}`,color:'green'});
     }
     // solve function called when user click any btn 
    function solve(e)
    {   //first validate if validation is successfull then we find solution 
        if(validatevalu()){
        solution(e.target.innerText);
    }  
    }
    return (
        <div className="container"><h1>React Calculator</h1>
        <input type="text" placeholder="Num1" id="Num1"></input>
        <input type="text" placeholder="Num2" id="Num2"></input>
        <div className="btn"><button onClick={solve}>+</button>
        <button onClick={solve}>-</button>
        <button onClick={solve}>*</button>
        <button onClick={solve}>/</button></div>
        <div className="res"><p style={{color:`${res.color}`}}>{res.msg}</p>
        <p>{res.resvalue}</p>
        </div>
        </div>
    )
}
export default Calculator;