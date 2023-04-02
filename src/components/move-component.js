import React from 'react'
import '../style/move-component-style.css'
import { Link } from 'react-router-dom'

function Movie(props) {
    let query=props.query
    let movies=props.movies
    return (
        <div className='container'>
            {
                movies.filter(move => {
                    if (query === '') {
                        return move;
                    } else if (move.title.toLowerCase().includes(query.toLowerCase())) {
                        return move;
                    }
                }).map((move, index) => (
                    <div key={index}>
                        <div className='container' >
                            <div className='rr'>
                            <Link to={`/MoveDetail/${move.id}`} ><img src={move.img} alt="" /></Link>
                            { move.isRented ? <button id={move.id} onClick={props.rented} className="btn">-</button> :<button id={move.id} onClick={props.rented} className="btn">+</button> }
                            </div>
                        </div>
                    </div>
                ))
            }
            
           
        </div>
    )
}
export default Movie;