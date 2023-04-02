import React, { useState } from 'react'
import Move from './move-component'
import Rented from './Rented-component'
import Data from '../data.json'

let moviesData=Data.moviesData
function Catalog() {
    let [movies, setMoviesData] = useState(moviesData)
    let [budget, setBudget] = useState(100)
    let [query, setQuery] = useState("")
    const decreaseBudget = () => {
        setBudget(budget -= 10)
    }

    const increaseBudget = () => {
        setBudget(budget += 10)
    }

    const rented = function (move) {
        let id = move.target.id
        if (movies[id].isRented === false) {
            let newArr = [...movies]
            newArr[id].isRented = true
            setMoviesData(newArr);
            decreaseBudget()
        } else {
            let newArr = [...movies]
            newArr[id].isRented = false
            setMoviesData(newArr);
            increaseBudget()
        }

    }
    return (
        <div >
            <input placeholder="search" onChange={event => setQuery(event.target.value)} />
            <span>Budget:${budget}</span>
            <h3>Rented:</h3> 
            <Rented rented={rented}  query={query} movies={movies}/>
            <h3>Catalog:</h3>
            <Move rented={rented}  query={query} movies={movies}/>
            
        </div>


    )
}
export default Catalog;