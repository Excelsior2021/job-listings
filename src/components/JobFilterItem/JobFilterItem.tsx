import { useState } from "react"
import { useDispatch } from "react-redux"
import menuArrow from "../../assets/icons/menu-down.svg"
import jobsSlice from "../../slices/jobsSlice"
import "./JobFilterItem.scss"

const JobFilterList = ({ filter: { name, options } }) => {
  const [filterOpen, setFilterOpen] = useState(false)
  const dispatch = useDispatch()
  const {
    jobsActions: { filterJobs, changeFilters },
  } = jobsSlice

  const handleFilters = event => {
    dispatch(
      changeFilters({
        filter: name,
        checked: event.target.checked,
        value: event.target.value,
      })
    )
    dispatch(filterJobs())
  }

  return (
    <>
      <button
        key={name}
        className="job-filter__filter"
        onClick={() => {
          setFilterOpen(!filterOpen)
        }}>
        {name}
        <img src={menuArrow} alt="menu arrow" className="job-filter__arrow" />
      </button>
      <ul
        className={
          filterOpen
            ? "job-filter-list job-filter-list--open"
            : "job-filter-list"
        }>
        {options.map(option => (
          <li key={option} className="job-filter-list__item">
            <input
              className="job-filter-list__input"
              name={option}
              value={option}
              type="checkbox"
              defaultChecked
              onChange={handleFilters}
            />
            <label className="job-filter-list__label" htmlFor={option}>
              {option}
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default JobFilterList
