import Link from "next/link"
import style from "./styleHeaderComponent.module.css"

export default function HeaderComponent(){
    return(
        <header className={style.header}>
            <Link href={"/"}>Home</Link>
            <Link href={"/sobre"}>Sobre Mim</Link>
            <Link href={"/projetos"}>Projetos</Link>
            <Link href={"/contato"}>Contato</Link>
        </header>
    )
}