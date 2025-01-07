import { useState, useEffect } from "react";
import axios from 'axios';
import MealItem from "./MealItem";

const Meals = () => {
    const [loadedMeals, setLoadMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await axios.get('http://localhost:3000/meals');
            console.log(response)

            if (response.ok) {
                //
            }

            //deserialize the json object into js object
            const meals = await response.data
            console.log(meals)

            setLoadMeals(meals)
        }

        fetchMeals();
    }, [])

    return <ul id = "meals">{
        loadedMeals.map(meal => <MealItem key = {meal.id} meal={meal}/>)
    }</ul>
}

export default Meals;