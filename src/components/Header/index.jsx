import styles from "./styles.module.scss";

export default function Header(){
    return(
        <header className={styles.header}>
        <div className={styles.textContent}>
            <h1>Oi, eu sou o Pedro Magno! 👋</h1>
            <h2>Estudante de Ciência da Computação e futuro Desenvolvedor</h2>
        </div>
        <img src="assets/Eu.png" alt="Pedro Magno"/>
        </header>
    )
}