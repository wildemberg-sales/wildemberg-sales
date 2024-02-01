import style from "./styleFooterComponent.module.css"

export default function FooterComponent(){
    return(
        <footer className={style.footer}>
            <p>Design por <a href="#">Ester Flores</a></p>
            <p>Copyright © 2024 Wildemberg Sales</p>
        </footer>
    )
}