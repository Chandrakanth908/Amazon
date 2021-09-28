import './Account.css'

// import Logo from '../images/logo.jpg'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {auth} from '../firebase'

function Account()
{
    const history = useHistory();
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');

    const signin=(event)=>{

        event.preventDefault();

        alert(email +" "+password);

        auth.signInWithEmailAndPassword(email,password)
        .then((authResponce)=>{
            if(authResponce){
                history.push('/');
            }
        })
        .catch((errorresponse)=>{

            alert('Error');

           console.log(errorresponse);

        })
    }

    const register =(event)=>{
        event.preventDefault();

        // alert(email +" "+password);

        auth.createUserWithEmailAndPassword(email,password)
        .then((authResponce)=>{
            if(authResponce){
                history.push('/');
            }
        })
        .catch((errorresponse)=>{
            alert('Error');
           console.log(errorresponse);

        })

      
    }

    return(
        <div className='account'>

            <div className="account__image"><img className="account__img" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" alt=""/></div>
            
                
                     
            <div class="card account__body mx-auto d-block">                
                <div class="card-body">
                    <p class="card-title account__title">Sign-In</p>
                    <p class="card-text"><b className='mx-auto d-block account__toptext'>Email</b></p>
                    <input type='text' value={email} onChange={(event)=>setEmail(event.target.value)} className='account__textbox mx-auto d-block'/>


                    <p class="card-text"><b className='mx-auto d-block account__toptext'>Password</b></p>
                    <input type='password' value={password} onChange={(event)=>setPassword(event.target.value)} className='account__textbox mx-auto d-block mt-2'></input>

                    <button class="btn account__btn mx-auto d-block" onClick={signin}>Continue</button>
                    <p className='account__text'>By continuing, you agree to Amazon's <a href='/'>Conditions of Use</a> and <a href='/'>Privacy Notice</a>.</p>
                    <details>
                        <summary className='account__text1'><a href="/">Need help?</a></summary>
                        <p className='account__text2'><a href="/">Forget Password</a></p>
                        <p className='account__text2'><a href="/">Other issues with Sign-In</a></p>
                    </details>
                </div>
            </div>
            <p className='account__new'>New to Amazon?</p>
            <button type='button'  className='btn account__button1 mx-auto d-block' onClick = {register}>Create your Amazon account</button>

            {/* <div>
                <h1>{email}</h1>
                <h1>{password}</h1>
            </div> */}
            <hr></hr>
            <div className='d-flex account__btext'> 
                <p className='account__con'>Conditions of Use</p>
                <p className='account__p'>Privacy Notice</p>
                <p>Help</p>
            </div>                  
            <p className='account__footer'>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
        </div>
    )
}
export default Account;
