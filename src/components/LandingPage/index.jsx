import { Logo } from "../Logo"
import "./styles.css"
import background from "../../images/landing-page-logo.png"

export const LandingPage = ({setPage, page})=>{

    return(
        <div className="ContainerBlack">
            <div className="writedStuff">
                <Logo page={page}/>
                <p className="centralizeP">Centralize o controle de suas finanças</p>   
                <p className="deFormaP">de forma rápida e segura</p>
                <button onClick={()=>setPage(true)}>Iniciar</button>
            </div>
            <img src={background} alt="" />
        </div>
    )
}