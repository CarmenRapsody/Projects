import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user', //tiene que coincidir con el nombre del store
    initialState: {
        user: null
    }, 
    reducers:{
        //SET_USER(estado incial, accion que pasamos cuando inyectamos una accion)
        SET_USER: (state, action) =>{ 
            state.user = action.payload //dispatch(SET_USER({name:"javascriptkdsjbf"}))

        }
    }
}) 

export const { SET_USER } =  userSlice.actions;
export const selectUser = state => state.user.user;
export default userSlice.reducer;