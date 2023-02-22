import { useEffect, useState } from 'react';

function CreditCardValid({num}){
    let Validity=false;
    //let [cardNumber, setCardNumber] = useState(null)
    let [sum, setSum] = useState(0)
    function checkifCardValid(){

        
    //Step 1:
    let arr = Array.from(num.toString())
    arr=arr.map(a => parseInt(a))
    console.log(arr)

    //Step2:
    for (let i = arr.length -2 ; i >=0 ; i-=2){
        arr[i] *= 2
    }
    console.log(arr)

    //Step3:
    let sum_temp = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<10)
            sum_temp+=arr[i]
        else{
            let noOfTens = Math.floor(arr[i]/10)
            sum_temp += noOfTens + arr[i]%10
        }
     
    } 
    setSum(sum_temp)
    // console.log(sum)
    }
    
    useEffect(() => {
        checkifCardValid()
    },[num])
    //Step4:
    if(sum%10 !== 0 || num==="")
        Validity=false;
    else
        Validity=true;

    if(Validity===false){
        if(num==="") {
            return (<div></div>);}
        else {
            return (<div>Credit Card is not Valid</div>);}}
    else if(Validity===true){
        return (<div>Credit Card is Valid</div>);}

}
export default CreditCardValid;
