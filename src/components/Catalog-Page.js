import React, { useState } from 'react'
import Move from './move-component'
import Rented from './Rented-component'


let moviesData =
    [
        { id: 0, isRented: false, title: "My Neighbor Totoro ", year: 1988, img: "https://flxt.tmsimg.com/NowShowing/120448/120448_aa.jpg", descrShort: "This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro." },
        { id: 1, isRented: false, title: "Spirited Away", img: "https://flxt.tmsimg.com/NowShowing/32913/32913_aa.jpg", year: 2001, descrShort: "10-year-old Chihiro (Daveigh Chase) moves with her parents to a new home in the Japanese countryside. After taking a wrong turn down a wooded path, Chihiro and her parents discover an amusement park with a stall containing an assortment of food. To her surprise, Chihiro's parents begin eating and then transform into pigs. In this supernatural realm, Chihiro encounters a host of characters and endures labor in a bathhouse for spirits, awaiting a reunion with her parents." },
        { id: 2, isRented: false, title: "Arrietty", year: 2010, img: "https://flxt.tmsimg.com/assets/p8777609_v_v10_ad.jpg", descrShort: "Arrietty, a tiny teenager, lives with her parents in the recesses of a suburban home, unbeknown to the homeowner and housekeeper. Like others of her kind, Arrietty remains hidden from her human hosts, but occasionally ventures forth from beneath the floorboards to borrow sugar cubes and other supplies. A secret friendship forms when 12-year-old Shawn meets Arrietty, but their relationship could spell danger for Arrietty's family." },
        { id: 3, isRented: false, title: "PRINCESS MONONOKE", year: 1997, img: "https://flxt.tmsimg.com/assets/p23052_v_h9_aa.jpg", descrShort: "A prince becomes involved in the struggle between a forest princess and the encroachment of mechanization." },
        { id: 4, isRented: false, title: "PORCO ROSSO", year: 1992, img: "https://flxt.tmsimg.com/assets/p160147_p_v10_ab.jpg", descrShort: "In this entrancing tale by renowned Japanese animator Hiyao Miyazaki, World War I flying ace Marco Pagott mysteriously turns from a man into a pig after all his comrades die in battle. Now known as Porco Rosso, the pilot continues fighting air pirates while, on the ground, flirting with a gorgeous club singer. After an attack by a brash American pilot, Porco meets confident Fio, who repairs his plane with her girl mechanics, and sees him for who he really is." }
    ]

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

/*<h3>Rented:</h3> 
                        <div class='row'>
                            { move.isRented ? <Rented func={rented} img={move.img} id={move.id} sign={"-"} /> : <></>}
                        </div>*/
/*
  <span>Budget:${budget}</span>
                <div>
                    <h3>Rented:</h3>
                    <div className='row'>
                        {movies.map((move) => move.isRented ? <Rented func={rented} img={move.img} id={move.id} sign={"-"} /> : <></>)}
                    </div>
                </div>
                <div>
                    <h3>Catalog:</h3>
                    <div className='row '>
                        {movies.map((move) => move.isRented ? <Move func={rented} img={move.img} id={move.id} sign={"-"} /> : <Move func={rented} img={move.img} id={move.id} sign={"+"} />)}
                    </div>
                </div>
                */
