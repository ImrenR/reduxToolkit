import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice ({
name :"orderSlice",
initialState: {
  email:"",
  password:""
},

reducers:{

  createUser:(state,{payload}) => {

    state.email= payload.email
    state.password=payload.password

  },
  deleteUser :(state) => {
    state.email =""
    state.password=""

  }
}


 
})


export const {createUser, deleteUser}  = orderSlice.actions
export default orderSlice.reducer;