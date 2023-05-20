import React from 'react'
import { useMealsListContext } from '../providers/MealsProvider'

function MealsList() {
    const { meals } = useMealsListContext();
    return (
        <div>
            <h1>Meals List Using Context Api</h1>
            {meals.map((meals, index) => (
                <h2 key={index}>{meals}</h2>
            ))}
        </div>
    )
}

export default MealsList