import { useContext, useState } from "react"
import { ApplicationContext } from "../contexts/ApplicationContext"
import ProductCard from "../components/ProductCard"
import { Link, useNavigate } from "react-router-dom"

export default function Home(){

    const { cuisineDatas, restaurantData } = useContext(ApplicationContext)
    const [cuisineId, setCuisineId] = useState("")
    const navigate = useNavigate()

    console.log(123, cuisineDatas, restaurantData)


    let filteredRestaurantList;

    const selectCuisine = (cuisineId) =>{
      console.log(cuisineId)
      setCuisineId(cuisineId)
    }

    filteredRestaurantList = restaurantData.filter((eachRestaurant)=>eachRestaurant.cuisine_id===cuisineId)
   
    const goToRestaurantDetails = (restaurantId) =>{

        navigate(`/details/${restaurantId}`)
       
        // <Link to={`/details/${restaurantId}`}>Visit</Link>
    }

    return(
        <div>
            <h1> Food ordering App</h1>
            <h2>Select your Cuisine:</h2>
            {
           cuisineDatas.map((cuisineData)=>(
            <button className="btn-design" onClick={()=>{selectCuisine(cuisineData.id)}}>{cuisineData.name}</button>
           ))
           }
           
          {filteredRestaurantList.map((restaurant)=>(
            <ul>
            <h3 onClick={()=>{goToRestaurantDetails(restaurant.id)}}>Dishes By {restaurant.name}</h3>
            <p>{restaurant.menu.map((menuItem)=>(
               <ProductCard data={menuItem}/>
            ))}</p>
            </ul>
           ))}
        </div>
    )
}