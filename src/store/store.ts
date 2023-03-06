import { configureStore } from "@reduxjs/toolkit"
import jobsSlice from "../slices/jobsSlice"

const store = configureStore({
  reducer: {
    jobs: jobsSlice.jobsReducer,
  },
})

export default store
