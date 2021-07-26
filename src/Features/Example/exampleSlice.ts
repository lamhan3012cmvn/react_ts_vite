import { createSlice } from '@reduxjs/toolkit';

interface sliceUser{
  name:string,
  age:string
}

const initialState:sliceUser ={
  name:"Khang",
  age:"28"
}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    changeName:(state,action) =>{
      state.name=action.payload
    },
  }
})

export const {changeName}=userSlice.actions

export default userSlice.reducer