import "./styles.css"
import {useState} from "react"
import {FaTrash} from "react-icons/fa"

export const Card = ({transaction, remove, prop}) => {
    // console.log(prop)
    return(
        <div className="Card">
            <div className="left">
                <h3>{transaction.description}</h3>
                <p>{transaction.type}</p>
            </div>
            <div className="right">
                <p><span>R$</span>{transaction.value<0 ?transaction.value*-1:transaction.value}</p>
                <button onClick={()=>remove(prop)}><FaTrash/></button>
                
            </div>
        </div>
    )
}
