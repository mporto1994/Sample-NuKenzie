import "./styles.css"
import {useEffect, useState} from "react"
import {Card} from "../Card"

export const List = ({transactions, remove , toSelect}) => {
    console.log(transactions)
    
    return(
        <div className="list">
            <header>
                <h2>Resumo Financeiro</h2>
                <div>
                    <button onClick={()=>toSelect("all")}>Todos</button>
                    <button onClick={()=>toSelect("incomes")}>Entradas</button>
                    <button onClick={()=>toSelect("expenses")}>Saidas</button>
                </div>
            </header>
            {transactions.map((transaction, index)=>{
                let newIndex = index;
                return(<Card transaction={transaction} key={index} prop={index} remove={remove}/>
            )})}
        </div>
    )
}
