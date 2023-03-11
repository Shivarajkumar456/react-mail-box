import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mailSliceAction } from '../../store/emailReducer';
import classes from './Inbox.module.css';

const Inbox = () => {
    const dispatch=useDispatch();
    const mailInInbox=useSelector(state=>state.mail.mails);
    const myEmail=localStorage.getItem('email').replace(/['@','.']/g,'');
    const [reRender,setreRender]=useState(true)

    let data=[];

    const deleteHandler=async(id)=>{
        const response= await fetch(`https://mail-box-8893a-default-rtdb.firebaseio.com/inbox/${myEmail}/${id}.json`,{
            method:'DELETE'
        })  
        const deleteData=await response.json();
        setreRender((prev)=>!prev)
        console.log('deleteddddddInbox');
    
    }

    useEffect(()=>{
        const fetchDaata=async()=>{
            const reponse=await fetch(`https://mail-box-8893a-default-rtdb.firebaseio.com/inbox/${myEmail}.json`);

            const mailData=await reponse.json();
            console.log('useEffectcalled', mailData);
            for(let key in mailData){
                data=[{id:key,...mailData[key]},...data]
            }

            dispatch(mailSliceAction.updateInbox(data))

        }
        fetchDaata();
    },[reRender])
    console.log(data,'data');
  return (
    <div className={classes.main}>
        {mailInInbox.length>0 ? (<div className={classes.row}>
            {

                mailInInbox.map((item)=>(
                    <div className={classes.row1} key={item.id}>
                    <div className={classes.user}>From: {item.sender}</div>
            <div className={classes.subject}>{item.subject}</div>
            <div className={classes.msg}>
                <NavLink to={`/message/${item.id}`}>message</NavLink>
            </div>
            {item.dot && <div className={classes.dot}>
            {/* //dot logic */}
            </div>}
            <div className={classes.delete}>
                <button onClick={deleteHandler.bind(null,item.id)}>Delete</button>
            </div>
            </div>
                ))

            }
        </div>) : <p>Inbox is empty</p>}
    </div>
  )
}

export default Inbox