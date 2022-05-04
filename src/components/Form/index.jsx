import "./styles.css"
import {useState} from "react"

export const Form = ({transactions, setTransactions,saveTransaction}) => {
    const [input,setInput]  = useState({description:"",type:"entrada",value:0})



    return(
        <form onSubmit={(event)=>event.preventDefault()}>
            <label>Descrição
                <input 
                    placeholder="Digite sua descrição" 
                    value={input.description} 
                    onChange={((event)=>setInput({...input,"description":event.target.value}))}/>
                <p>Ex:Compra de roupas</p>
            </label>
            <div>
                <label>Valor 
                    <input 
                        type="number" 
                        placeholder="  1                       R$" 
                        value={input.value} 
                        onChange={((event)=>setInput({...input,"value":event.target.value}))}/>
                    </label>
                <label>Tipo de valor
                    <select value={input.type} 
                            onChange={((event)=>setInput({...input,"type":event.target.value}))}>
                        <option value="Entrada" defaultValue>Entrada</option>
                        <option value="Saída">Saída</option>
                    </select>
                </label>
            </div>
            <div className="button"><button onClick={(()=>saveTransaction(input))}>Inserir Valor</button></div>
            
        </form>
    )
}
