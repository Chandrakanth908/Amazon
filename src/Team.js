import { doc } from 'prettier';
import react from 'react'

function Team(){
    var a=10;
    var b=20;
    var c=a+b;
    const addition=()=>{
        alert('i am in addition');
        sum=a+b;
        alert("sum of a,b ="+sum);
        document.getElementById('res').innerHTML="sum"
    }
    const subtraction=()=>{
        alert('i am in subtraction');
        sub=a-b;
        alert("sub of a,b ="+sub);
        document.getElementById('res').innerHTML="sub"
    }
    const multiplication=()=>{
        alert('i am in multiplication');
        mul=a*b;
        alert("mul of a,b ="+mul);
        document.getElementById('res').innerHTML="mul"
    }
    const division=()=>{
        alert('i am in divison');
        div=a/b;
        alert("div of a,b ="+div);
        document.getElementById('res').innerHTML="div"
    }

    return(
        <div id='team_div'>
            <h1 id='aa'>Calculator....</h1>
            <h1 id='bb'>A : {a}</h1>
            <h1 id='cc'>B : {b}</h1>
            <h1 id='res'>Sum of A,B = {Sum}</h1>
            <button id='dd' onClick={addition}>ADD</button>
            <button id='ee' onClick={subtraction}>SUB</button>
            <button id='ff' onClick={multiplication}>MUL</button>
            <button id='gg' onClick={division}>DIV</button>

        </div>
    )
}