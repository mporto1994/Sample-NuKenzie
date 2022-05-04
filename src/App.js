import './App.css';
import {useState,useEffect} from "react"
import {List} from "./components/List"
import {Form} from "./components/Form"
import {TotalMoney} from "./components/TotalMoney"
import {Header} from "./components/Header"
import { LandingPage } from './components/LandingPage';

function App() {
  const [listTransactions, setListTransactions] = useState([])

  const list = [{ description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }]


  const [all,setAll]=useState(true)

  const [expenses,setExpenses]=useState(false)
  const [income,setIncome]=useState(false)

  const [page, setPage] = useState(false)

  function toSelect (select) {

    if(select==="all"){
        setAll(true)
        setExpenses(false)
        setIncome(false)
      }
      else if(select==="expenses"){
        setAll(false)
        setIncome(false)
        setExpenses(true)
      }
      else if(select==="incomes"){
        setAll(false)
        setIncome(true)
        setExpenses(false)
      }
  }

  const FilterTransaction = () => {

    return(
    all?listTransactions:expenses?
    listTransactions.filter((item)=>item.type==="Saída"):
    listTransactions.filter((item)=>item.type==="Entrada"))
    
  }

  const saveTransaction = (input) =>{
  typeof input.value != 	"number" ? input.value = parseInt(input.value):input.value=input.value
  setListTransactions([...listTransactions,input])
  }

  const removeTransaction =(index) =>{
    const newList=listTransactions
    setListTransactions(listTransactions.filter((item,index2)=>index2!==index))
  }

  return (
    <>{page?<div className='main'>

      <Header page={page}/>
      <div className="Container">
        <div className='leftColumn'>
          <Form transactions = {listTransactions} setTransections = {setListTransactions} saveTransaction={saveTransaction}/>
          <TotalMoney transactions = {listTransactions}/>
        </div>
        <List transactions = {FilterTransaction()} remove={removeTransaction} toSelect={toSelect}/>
      </div>
    </div>:<LandingPage setPage={setPage} page={page}/>}</>
  );
}

export default App;
