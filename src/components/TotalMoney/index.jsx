import "./styles.css"
import {useState} from "react"

export const TotalMoney = ({transactions}) => {
    const total = () =>{
        return(transactions.reduce((total,atual)=>(atual.type==="Saída"?total-atual.value:total+atual.value),0))
    }

    return(
        <div className="total">
            <p>Valor total:</p> 
            <p><span>$</span>{total()}</p> 
        </div>
    )
}
