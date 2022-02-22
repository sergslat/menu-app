const Button = ({cat,filter,setFilter}) => {
    const filterHandler = (e) => {
        setFilter(e.target.value);
        console.log(e.target.value);
    }
    return(
        <button onClick={filterHandler} type="button" className="filter-btn" value={cat}>
            {cat}               
        </button>
    )
}

export default Button;