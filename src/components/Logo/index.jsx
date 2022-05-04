import "./styles.css"

export const Logo = ({page})=>{
    console.log("teste ",page)
    return(
        <div  className={ page ? "logoBlack" : "logoWhite" } >
            <h1 >Nu <span>Kenzie</span></h1>
        </div>
    )
}