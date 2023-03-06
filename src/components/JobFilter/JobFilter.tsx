import JobFilterItem from "../JobFilterItem/JobFilterItem"
import filter from "../../assets/icons/filter.svg"
import "./JobFilter.scss"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const JobFilter = () => {
  const filtersData = useSelector(state => state.jobs.filters)
  const [filters, setFilters] = useState(null)

  useEffect(() => {
    const filterArray = []
    for (const filter in filtersData) {
      filterArray.push({ name: filter, options: filtersData[filter] })
    }
    setFilters(filterArray)
    console.log(filterArray)
  }, [])

  return (
    <div className="job-filter">
      <div className="job-filter__filters">
        {filters &&
          filters.map(filter => (
            <div key={filter.name} className="job-filter__item">
              <JobFilterItem filter={filter} />
            </div>
          ))}
      </div>

      <button className="job-filter__menu-button">
        <img src={filter} alt="filter" className="job-filter__icon" />
        filter
      </button>
    </div>
  )
}

export default JobFilter
