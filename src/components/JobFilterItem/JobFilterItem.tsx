import { useState } from "react"
import { useDispatch } from "react-redux"
import menuArrow from "../../assets/icons/menu-down.svg"
import jobsSlice from "../../slices/jobsSlice"
import "./JobFilterItem.scss"

const JobFilterItem = ({ filter: { name, options }, menu }) => {
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
    <div className={menu ? "job-filter-item-menu" : "job-filter-item"}>
      {!menu && (
        <button
          key={name}
          className={menu ? "job-filter-item-menu" : "job-filter-item__button"}
          onClick={() => {
            setFilterOpen(!filterOpen)
          }}>
          {name}
          <img src={menuArrow} alt="menu arrow" className="job-filter__arrow" />
        </button>
      )}
      {menu && <h2 className="job-filter-item-menu__heading">{name}</h2>}
      <ul
        className={
          menu
            ? "job-filter-item-menu__list"
            : filterOpen
            ? "job-filter-item__list job-filter-item__list--open"
            : "job-filter-item__list"
        }>
        {options.map(option => (
          <li
            key={option}
            className={
              menu ? "job-filter-item-menu__item" : "job-filter-item__item"
            }>
            <input
              className="job-filter-item__input"
              name={option}
              value={option}
              type="checkbox"
              defaultChecked
              onChange={handleFilters}
            />
            <label className="job-filter-item__label" htmlFor={option}>
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobFilterItem
