import styles from './index.module.scss'

const FilterResults = () => {
    return (
        <div className={`mt-3 ${styles.filter_wrapper}`}>
            <h4>Filter Results</h4>
            <label className="p-2" htmlFor="filter">Filter by the time</label>
            <select name="" id="filter" className="form-control bg-dark text-white shadow-none border-dark">
                <option value="1d">Info for 1 day</option>
                <option value="7d">Info for 7 day</option>
                <option value="30d">Info for 30 day</option>
            </select>
        </div>
    )
}

export default FilterResults
