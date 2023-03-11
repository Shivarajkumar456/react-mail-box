import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mailSliceAction } from '../../store/emailReducer';
import classes from './SentBox.module.css';

const SentBox = () => {
    const dispatch=useDispatch();
    const mailInSentBox=useSelector(state=>state.mail.sendMails);
    const [reRender,setreRender]=useState(true);
    const myEmail=localStorage.getItem('email').replace(/['@','.']/g,'');

    const deleteHandler=async(id)=>{
        const response= await fetch(`https://book-search-app-62511-default-rtdb.firebaseio.com/sentbox/${myEmail}/${id}.json`,{
            method:'DELETE'
        })  
        const deleteData=await response.json();
        setreRender((prev)=>!prev)
        console.log('deletedddddd');
    }

    let data=[];

    useEffect(()=>{
        const fetchDaata=async()=>{
            const reponse=await fetch(`https://mail-box-8893a-default-rtdb.firebaseio.com/sentbox/${myEmail}.json`);

            const mailData=await reponse.json();
            console.log('useEffectcalled', mailData);
            for(let key in mailData){
                data=[{id:key,...mailData[key]},...data]
            }

            dispatch(mailSliceAction.updateSentbox(data));

        }
        fetchDaata();
    },[reRender])
    console.log(data,'data');
  return (
    <div className={classes.main}>
       {mailInSentBox.length>0 ?
  (<div className={classes.row}>
            {

                mailInSentBox.map((item)=>(
                    <div className={classes.row1} key={item.id}>
                    <div className={classes.user}>To :- {item.to}</div>
            <div className={classes.subject}>Subject :- {item.subject}</div>
            <div className={classes.msg}>
                messages: {item.message}
            </div>
            <div className={classes.delete}>
                <button onClick={deleteHandler.bind(null,item.id)}>Delete</button>
            </div>
            </div>
                ))

            }
        </div>) : <p>Sentbox is empty</p>}
    </div>
  )
}

export default SentBox;