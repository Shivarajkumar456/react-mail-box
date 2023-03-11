import { createSlice } from "@reduxjs/toolkit"


const initialEmailState={
    mails:[],
    sendMails: [],
    unread:0
}

const mailSlice=createSlice({
    name:'mail',
    initialState:initialEmailState,
    reducers:{
        updateInbox(state,action){
            state.mails=action.payload
        },
        updateUnread(state,action){
            state.unRead=action.payload
        },
        updateSentbox(state,action){
            state.sendMails=action.payload
        }
    }
});

export const mailSliceAction=mailSlice.actions;
export default mailSlice.reducer