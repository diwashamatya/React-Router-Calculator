import React from 'react'
import { useMealsListContext } from '../providers/MealsProvider'

function Counter() {
    const { meals } = useMealsListContext();

    return (
        <div>
            <h3> NUmber of meals today :{meals.length}</h3>
        </div>

    )
}

export default Counter