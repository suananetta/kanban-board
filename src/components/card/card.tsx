import { useUnit } from 'effector-react'
import { model } from './model'

export const Card = () => {
    const tasks = useUnit(model.$tasks);
    console.log(tasks);
    
    
    return (
        <>
        </>
    )
};