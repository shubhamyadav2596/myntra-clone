import { createSlice } from "@reduxjs/toolkit";
import {produce} from "immer"



const bagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers: {
      addToBag: (state, action) => {
        return produce(state, (draft) => {
          draft.push(action.payload)
        })
      },
      removeFromBag: (state, action) => {
        return produce(state, (draft) => {
         return draft.filter(itemId => itemId !== action.payload)
        })
      }
    }
})

export const bagActions = bagSlice.actions


export default bagSlice;