// // import './Sweets.css'

// import { useSelector  , useDispatch } from 'react-redux'


// function Sweets(){

//     let swetsCount = useSelector(state=>state.sweets);

//     let dispatch = useDispatch();

//     return(
//         <div className='sweets__home'>
//             <h1>Sweets</h1>
//             <h1> Sweets Count : {swetsCount}</h1>
//             <button onClick={()=>dispatch({ type : 'BUY_SWEETS' , count : 15})}>BUY SWEETS</button>

//         </div>
//     )
// }

// export default Sweets;
import {Component} from 'react'



class Father extends Component{



    constructor(props){

        super(props);

        this.state={

              sal : 50000,

              assets : '10 ac land'

        }



        console.log('i am constructor');

    }



    increment=()=>{

        this.setState({

            sal : this.state.sal+10000

        })



    }



    componentDidMount(){

        console.log("i am in componentDidMount");

    }



    render(){



        console.log('i am render');



        return(

            <div>

                <h1>Father : Class Component</h1>

                <h2>sal : {this.state.sal}</h2>

                <h2>assets : {this.state.assets}</h2>

                <button onClick={()=>this.increment()}>increment</button>



            </div>

        )

    }



}




export default Father;