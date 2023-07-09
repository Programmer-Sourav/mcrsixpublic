import { createContext, useEffect, useState } from "react";
import { restaurantsData, cuisineData } from "../data/api";

export const ApplicationContext = createContext()

export function ApplicationProvider({children}){

    const [restaurantData, setRestaurantData] = useState([])
    const [cuisineDatas, setCuisineDatas ] = useState(cuisineData)
  
    const [ allComments, setAllComments] = useState("")
    



    const getRestaurantsData = () =>{
        setRestaurantData(restaurantsData)
    }

    useEffect(()=>{getRestaurantsData()},[])

    const addReview = (rating, comment) =>{
        const review = {
            revName: "Sourav", 
            pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0", 
            comment: comment,
            rating: parseInt(rating)
        }
        setAllComments([...allComments, review])
    }
   
    return(
    <ApplicationContext.Provider value={{restaurantData, cuisineDatas, addReview, allComments, setAllComments}}>{children}</ApplicationContext.Provider>
    )
}