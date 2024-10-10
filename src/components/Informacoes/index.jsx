import styles from "./styles.module.scss";
import SectionTitle from "../SectionTitle";
import Skill from "../Skill";

export default function Informacoes(){
    return(
        <div className={styles.informacoes}>
            <SectionTitle text="Idiomas"/>
            <div className={styles.idiomas}>
                <span>🇺🇸 EN - Intermediário</span>
                <span>🇧🇷 PT-BR - Nativo</span>
            </div>
            <SectionTitle text="Educação"/>
            <div className={styles.educacao}>
                <span>🎓</span>
                <span>Bacharelado em Ciência da Computação - Universidade Estácio de Sá</span>
            </div>
            <SectionTitle text="Principais Competências"/>
            <div className={styles.skills}>
                <Skill image="assets/java.png" name="Java"/>
                <Skill image="assets/git.png" name="Git"/>
                <Skill image="assets/docker.png" name="Docker"/>
                <Skill image="assets/aws.png" name="AWS"/>
            </div>
        </div>
    )
}