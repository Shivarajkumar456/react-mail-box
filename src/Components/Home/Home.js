import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mailSliceAction } from '../../store/emailReducer';
import { useState } from 'react';
const Home = () => {
    const dispatch=useDispatch();
  const myEmail=localStorage.getItem('email').replace(/['@','.']/g,'');
  const [reRender,setreRender]=useState(true);
  const unRead=useSelector(state=>state.mail.unRead)
  let noOfUnread=0;

  let intervalID;
  intervalID = setInterval(()=>{
    setreRender((prev)=>!prev);
    console.log('intervall',intervalID);
  }, 2000);


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