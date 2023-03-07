import JobFilterItem from "../JobFilterItem/JobFilterItem"
import closeMenu from "../../assets/icons/close.svg"
import "./FilterMenu.scss"

const FilterMenu = ({ filters, menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "filter-menu filter-menu--open" : "filter-menu"}>
      <div className="filter-menu__menu">
        <img
          className="filter-menu__close-icon"
          src={closeMenu}
          alt="close menu"
          onClick={() => setMenuOpen(false)}
        />
        <div className="filter-menu__filters">
          {filters &&
            filters.map(filter => (
              <div key={filter.name} className="filter-menu__item">
                <JobFilterItem filter={filter} menu="menu" />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default FilterMenu
