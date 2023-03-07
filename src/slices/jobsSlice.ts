//@ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  jobs: [],
  filters: {
    roles: ["Frontend", "Backend", "Fullstack"],
    levels: ["Junior", "Midweight", "Senior"],
    languages: ["HTML", "CSS", "JavaScript", "Python", "Ruby"],
    tools: ["React", "Vue", "RoR", "Sass", "Django"],
  },
  filteredJobs: [],
  error: "",
}

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetch("./assets/data/data.json")
  return response.json()
})

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterJobs: state => {
      state.filteredJobs = state.jobs.filter(job => {
        if (
          state.filters.roles.includes(job.role) &&
          state.filters.levels.includes(job.level) &&
          (state.filters.languages.some(language =>
            job.languages.includes(language)
          ) ||
            job.languages.length === 0) &&
          (state.filters.tools.some(tool => job.tools.includes(tool)) ||
            job.tools.length === 0)
        )
          return job
      })
    },
    changeFilters: (state, action) => {
      if (action.payload.checked)
        state.filters = {
          ...state.filters,
          [action.payload.filter]: [
            ...state.filters[action.payload.filter],
            action.payload.value,
          ],
        }
      else
        state.filters = {
          ...state.filters,
          [action.payload.filter]: state.filters[action.payload.filter].filter(
            filter => filter !== action.payload.value
          ),
        }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchJobs.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = false
      state.jobs = action.payload
      state.error = ""
    })
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.loading = false
      state.jobs = []
      state.error = action.error.message
    })
  },
})

export default {
  jobsReducer: jobsSlice.reducer,
  jobsActions: jobsSlice.actions,
}
