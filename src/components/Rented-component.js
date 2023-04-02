import React from 'react'
import { Link } from 'react-router-dom'
import '../style/move-style.css'
function Rented(props) {
  let query = props.query
  let movies = props.movies
  return (

    <div className='container'>
      {
        movies.filter(move => {
          if (query === '') {
            return move.isRented;
          } else if (move.title.toLowerCase().includes(query.toLowerCase())) {
            return move.isRented;
          }
        }).map((move, index) => (
          <div key={index}>
            <div className='container' >
              <div className='rr'>
                <Link to={`/MoveDetail/${move.id}`} ><img src={move.img} alt="" /></Link>
                {move.isRented ? <button id={move.id} onClick={props.rented} className="btn">-</button> : <button id={move.id} onClick={props.rented} className="btn">+</button>}
              </div>
            </div>
          </div>
        ))
      }


    </div>
  )
}
export default Rented;