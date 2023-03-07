import JobFilterItem from "../JobFilterItem/JobFilterItem"
import filter from "../../assets/icons/filter.svg"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import FilterMenu from "../FilterMenu/FilterMenu"
import "./JobFilter.scss"

const JobFilter = () => {
  const filtersData = useSelector(state => state.jobs.filters)
  const [filters, setFilters] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const filterArray = []
    for (const filter in filtersData) {
      filterArray.push({ name: filter, options: filtersData[filter] })
    }
    setFilters(filterArray)
  }, [])

  return (
    <div className="job-filter">
      <FilterMenu
        filters={filters}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="job-filter__filters">
        {filters &&
          filters.map(filter => (
            <div key={filter.name} className="job-filter__item">
              <JobFilterItem filter={filter} />
            </div>
          ))}
      </div>

      <button
        className="job-filter__menu-button"
        onClick={() => setMenuOpen(true)}>
        <img src={filter} alt="filter" className="job-filter__icon" />
        filter
      </button>
    </div>
  )
}

export default JobFilter
