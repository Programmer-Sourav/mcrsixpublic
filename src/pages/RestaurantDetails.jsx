import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApplicationContext } from "../contexts/ApplicationContext"
import { ChakraProvider } from "@chakra-ui/react"
import { AddReview } from "../components/AddReview"

export default function RestaurantDetails(){

    const { id} = useParams()
    const { restaurantData, allComments } = useContext(ApplicationContext)
    const [updated, setUpdated] = useState([])

    function findRestaurantDetails(){
      return restaurantData.find((restaurant)=>(restaurant.id.toString()===id))   
    }

    const findRestaurant = findRestaurantDetails()
    

    //const updatedComments = findRestaurant.ratings.push(allComments)
   
    return(
        <div>
            {   
            <ul>
               <h1> {findRestaurant.name} </h1>
      <ChakraProvider>
        <AddReview/>
      </ChakraProvider>
                <p>{findRestaurant.menu.map((restaurantMenu)=>restaurantMenu.name)} </p>
                <p>{findRestaurant.address}</p>
                <p> Average Ratings: {findRestaurant.averageRating}</p>
                <hr/>
                <h1>Reviews: </h1>

                <hr/>
                    {findRestaurant.ratings.map((eachRating)=>(  
                    <div> 
                    <img src={eachRating.pp} alt="ppic" height="48px" width="48px"></img>
                    <p>{eachRating.revName}</p>
                    <p>{eachRating.comment}</p>
                    <p>{eachRating.rating}</p>
                    <hr/>
                    </div>
                    ))}
                {allComments.map((eachRating)=>(
                    <div> 
                    <img src={eachRating.pp} alt="ppic" height="48px" width="48px"></img>
                    <p>{eachRating.revName}</p>
                    <p>{eachRating.comment}</p>
                    <p>{eachRating.rating}</p>
                    <hr/>
                    </div>
                ))}
            </ul>
            }
            
       </div>
    )
}