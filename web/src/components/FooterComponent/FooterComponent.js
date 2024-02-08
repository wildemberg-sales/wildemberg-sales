import style from "./styleFooterComponent.module.css"
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    weight:'400',
    subsets:['latin']
})

export default function FooterComponent(){
    return(
        <footer className={style.footer}>
            <p className={urbanist.className}>Design por <a href="https://github.com/esteerlino" target="_blank">Ester Lino</a></p>
            <p className={urbanist.className}>Copyright © 2024 Wildemberg Sales</p>
        </footer>
    )
}