import { configureStore } from "@reduxjs/toolkit";
import projectreducer from '../Redux/ProjectSlice'

const Store = configureStore({
  reducer: {
    projects: projectreducer, 
  },
});

export default Store;
