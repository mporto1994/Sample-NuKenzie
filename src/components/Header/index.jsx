import "./styles.css"
import {useState} from "react"
import { Logo } from "../Logo"

export const Header = ({page}) => {

    return(
        <header className="cabeçalho">
            <div className="content">
            <Logo page={page}/>  
            <button>Inicio</button>  
            </div>
            
        </header>
    )
}
