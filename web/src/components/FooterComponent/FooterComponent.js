import style from "./styleFooterComponent.module.css"

export default function FooterComponent(){
    return(
        <footer className={style.footer}>
            <p>Design por <a href="https://github.com/esteerlino" target="_blank">Ester Lino</a></p>
            <p>Copyright © 2024 Wildemberg Sales</p>
        </footer>
    )
}