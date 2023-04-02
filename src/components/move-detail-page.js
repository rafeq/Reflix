import React from 'react'
import {useParams } from 'react-router-dom'
import '../style/move-detail-style.css'
import Data from '../data.json'
let moviesData=Data.moviesData

function MoveDetail() {
    const { id } = useParams();
    return (
        <div>
            <h1>{moviesData[id].title}({moviesData[id].year})</h1>
            <img className="center image" src={moviesData[id].img} alt="" />
            <p>{moviesData[id].descrShort}</p>
      
        </div>
    )
}
export default MoveDetail;