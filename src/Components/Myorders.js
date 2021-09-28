// import React,{useState,useEffect} from 'react'
// import Order from '../Components/Order'
// import {db} from '../firebase'
// import { useSelector } from 'react-redux'


// export default function Myorders(){
//     let user = useSelector(state=>state.user);

//     let [orders,setOrders] = useState()

//     useEffect(()=>{

//         db.collection('users')
//         .doc(user?.uid)
//         .collection('orders') 
//         .onSnapshot((snapshot)=>{
//             console.log('in success of snapshot');
//             console.log(snapshot.docs);
//             setOrders(snapshot.docs.map((doc)=>(
//                 {
//                     id: doc.id,
//                     data: doc.data()
//                 }
//             )))
//             console.log(orders)
//         })      

//     }, [])

//     return(
//         <div>
            
//             <h1>My Orders {orders?.length}</h1>

//             <div className="orders__order">

//                 { user && orders?.map(order=>(
//                     <Order key={order.id} order={order}/>
//                 ))
//                 }
//             </div>
//         </div>
//     )
// }
