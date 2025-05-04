import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    ProjectList: [],
}

export const addproject = createAsyncThunk('Project/addproject', async (data) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/wedding`, data)
    return data
})

export const viewproject = createAsyncThunk('Project/viewproject', async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/wedding`)
    // console.log("res..",res);
    return res.data.project
})


export const DeleteProject = createAsyncThunk('Project/DeleteProject', async (id) => {
    const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/wedding/${id}`)
    return id
})

export const EditProject = createAsyncThunk('Project/EditProject', async (data) => {
    const { _id } = data
    console.log(_id)
    const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/wedding/${_id}`, data)
    return data
})




const ProjectSlice = createSlice({
    name: "Projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addproject.fulfilled, (state, action) => {
                state.ProjectList.push(action.payload)
            })
            .addCase(viewproject.fulfilled, (state, action) => {
                console.log(action.payload);
                state.ProjectList = action.payload
            })
            .addCase(DeleteProject.fulfilled, (state, action) => {
                const id = action.payload
                const new_Data = state.ProjectList.filter((product) => {
                    return product._id !== id
                })
                state.ProjectList = new_Data
            })
            .addCase(EditProject.fulfilled, (state, action) => {
                const id = action.payload

                const index_number = state.ProjectList.find((product) => {
                    return product._id == id
                })
                if (index_number != -1) {
                    state.ProjectList[index_number] = action.payload
                }
            })

    }
})

export default ProjectSlice.reducer