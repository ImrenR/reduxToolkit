import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice ({
name :"orderSlice",
initialState: {
  email:"",
  password:""
},

reducers:{

  createUser:(state,{payload}) => {

  }
}



})


export const {createUser}  = orderSlice.actions
export default orderSlice.reducer;