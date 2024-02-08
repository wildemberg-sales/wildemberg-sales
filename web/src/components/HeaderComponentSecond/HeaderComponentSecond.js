import Link from "next/link"
import style from "./styleHeaderComponent.module.css"
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    weight:'600',
    subsets:['latin']
})

export default function HeaderComponentSecond(){
    return(
        <header className={style.header}>
            <Link className={urbanist.className} href={"/"}>Home</Link>
            <Link className={urbanist.className} href={"/sobre"}>Sobre Mim</Link>
            <Link className={urbanist.className} href={"/projetos"}>Projetos</Link>
            <Link className={urbanist.className} href={"/contato"}>Contato</Link>
        </header>
    )
}