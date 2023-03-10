import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { mailSliceAction } from '../../store/emailReducer';
const Home = () => {
    const dispatch=useDispatch();
  const myEmail=localStorage.getItem('email').replace(/['@','.']/g,'');
  let noOfUnread=0;

  useEffect(()=>{
    const fetchDaata=async()=>{
        const reponse=await fetch(`https://mail-box-8893a-default-rtdb.firebaseio.com/inbox/${myEmail}.json`);

        const mailData=await reponse.json();
        console.log('useEffectcalled', mailData);
        for(let key in mailData){
            // data=[{id:key,...mailData[key]},...data]
            if(mailData[key].dot===true){
              noOfUnread++
              // console.log(noOfUnread,'noOfUnread');
            }
        }
        console.log(noOfUnread,'noOfUnread');

        dispatch(mailSliceAction.updateUnread(noOfUnread))

    }
    fetchDaata();
},[dispatch, myEmail, noOfUnread])
    return <h1 style={{marginTop:120}}>Welcome to Mail box</h1>
}

export default Home;