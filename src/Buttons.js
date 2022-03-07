import Button from "./Button";
const Buttons = ({categories,filter,setFilter}) => {
    return(
        <div className="btn-container">
            {categories.map(cat =>
              <Button key={Math.random()*10} cat = {cat} filter={filter} setFilter={setFilter}/>
            )}
            
        </div> 
    )
}
export default Buttons;