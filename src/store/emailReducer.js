import { createSlice } from "@reduxjs/toolkit"


const initialEmailState={
    mails:[],
}

const mailSlice=createSlice({
    name:'mail',
    initialState:initialEmailState,
    reducers:{
        updateInbox(state,action){
            state.mails=action.payload
        }
    }
});

export const mailSliceAction=mailSlice.actions;
export default mailSlice.reducer