'use client'
import Link from "next/link"
import style from "./styleHeaderComponent.module.css"
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    weight:'800',
    subsets:['latin']
})

export default function HeaderComponent(){

    function controleMenu (){
        let botaoOpen = document.getElementById("menuOpen")
        let botaoClose = document.getElementById("menuClose")
        let menu = document.getElementById("menu")

        if(botaoOpen.style.display != "none"){
            botaoOpen.style.display  = 'none'
            botaoClose.style.display = 'inline'
            menu.style.display = 'block'
        }else{
            botaoOpen.style.display  = 'inline'
            botaoClose.style.display = 'none'
            menu.style.display = 'none'
        }
    }

    return(
        <>
            <header className={style.header}>
                <Link className={urbanist.className} href={"/"}>Home</Link>
                <Link className={urbanist.className} href={"/sobre"}>Sobre Mim</Link>
                <Link className={urbanist.className} href={"/projetos"}>Projetos</Link>
                <Link className={urbanist.className} href={"/contato"}>Contato</Link>
            </header>
            <header className={style.headerMobile}>
                <img id="menuOpen" src="menu.png" onClick={controleMenu}/>
                <img id="menuClose" className={style.menuClose} src="fechar.png" onClick={controleMenu}/>

                <ul id="menu">
                    <li><Link className={urbanist.className} href={"/"}>Home</Link></li>
                    <li><Link className={urbanist.className} href={"/sobre"}>Sobre Mim</Link></li>
                    <li><Link className={urbanist.className} href={"/projetos"}>Projetos</Link></li>
                    <li><Link className={urbanist.className} href={"/contato"}>Contato</Link></li>
                </ul>
            </header>
        </>
    )
}