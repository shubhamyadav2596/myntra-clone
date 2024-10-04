import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const fetchStatusSlice = createSlice({
    name: "items",
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
           return produce (state, (draft) => {
            draft.fetchDone = true;
           })   
        },
        markFetchingStarted: (state) => {
            return produce (state, (draft) => {
                draft.currentlyFetching = true;
            })
        },
        markFetchingFinished: (state) => {
            return produce (state, (draft) => {
                draft.currentlyFetching = false;
            })
        }
    }
  
})

export const fetchStatusActions = fetchStatusSlice.actions


export default fetchStatusSlice;