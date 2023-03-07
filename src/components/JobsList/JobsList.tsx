// @ts-nocheck
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchJobs } from "../../slices/jobsSlice"
import JobFilter from "../JobFilter/JobFilter"
import JobItem from "../JobItem/JobItem"
import jobsSlice from "../../slices/jobsSlice"
import "./JobsList.scss"

const JobsList = () => {
  const jobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()
  const {
    jobsActions: { filterJobs },
  } = jobsSlice

  const handleFetchJobs = async () => {
    await dispatch(fetchJobs())
    dispatch(filterJobs())
  }

  useEffect(() => {
    handleFetchJobs()
  }, [])

  return (
    <>
      <JobFilter />
      <ul className="jobs-list">
        {jobs.loading && <p className="jobs-list__loading">loading...</p>}
        {!jobs.loading &&
          jobs.filteredJobs.map(job => <JobItem key={job.id} job={job} />)}
        {!jobs.loading && jobs.error && (
          <p className="jobs-list__error">{jobs.error}</p>
        )}
      </ul>
    </>
  )
}
export default JobsList
