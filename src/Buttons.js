import Button from "./Button";
const Buttons = ({categories,filter,setFilter}) => {
    return(
        <div className="btn-container">
            {categories.map(cat =>
              <Button cat = {cat} filter={filter} setFilter={setFilter}/>
            )}
            
        </div> 
    )
}
export default Buttons;