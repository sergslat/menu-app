import SingleItem from './SingleItem';
import Buttons from './Buttons';
import { useState, useEffect } from 'react';

const Menu = () =>{
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState('all');
    const [filteredData,setFilteredData] = useState([]);
    const searchValue = 'bolivia';
    //proxy server to use CORS
    const proxy = 'https://fierce-escarpment-42855.herokuapp.com/';
    // const proxy = '';
    const str = proxy + 'https://api.edamam.com/search?q='+ searchValue + '&app_id=' + process.env.REACT_APP_API_ID + '&app_key=' + process.env.REACT_APP_API_KEY;
    function parseMenu(data){
        let results = data.hits;
        // console.log(results);
        let menu = [];
        results.forEach(element => {
            // console.log(element.recipe.label);
            let dish = {
                id: results.indexOf(element),
                title: element.recipe.label,
                category: element.recipe.mealType[0],
                price: Math.round(element.recipe.calories/100),
                img: element.recipe.image,
                desc: element.recipe.ingredientLines[0]
            }
            menu.push(dish);
        });
        return ( menu );
    }
    const getMenu = async () =>{
        const res = await fetch (str);
        const apiData = await res.json();
        let menu = parseMenu(apiData);
        setData(menu)
    }
    //Use getMenu outside useEffect creates a rendering loop Error
    //getMenu();
    useEffect(() =>{
        getMenu();
    },[]);
    const filterData = () => {
        
        if(filter !== 'all'){
            const filteredData = data.filter (item => item.category === filter);
            setFilteredData(filteredData);
        } else {
            setFilteredData(data);
        }
        
    }
    useEffect(filterData,[filter,data]);
    const categoriesSet = new Set (data.map(dish => dish.category));
    const categories = [...categoriesSet];
    categories.unshift('all');
    return(
        <div>
            <Buttons categories = {categories} filter={filter} setFilter={setFilter}/>
            <div className="section-center">
                {
                    filteredData.map( dish => 
                        <SingleItem key={dish.id} dish = {dish} />
                    )
                }
                
            </div> 
        </div>
       
    )
}
export default Menu;