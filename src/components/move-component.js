import React from 'react'
import './move-style.css'
import { Link } from 'react-router-dom'

function Movie(props){
    let id = props.id
    /*let isRented = props.isRented
    let title = props.title
    let year = props.year*/
    let img = props.img
    let func=props.func
    let sign=props.sign
    return (
        <div className='container'>
      <Link to={`/MoveDetail/${id}`} ><img src={img} /></Link>
      <button id={id} onClick={func} class="btn">{sign}</button>
      </div>
    )
  }
  export default Movie;