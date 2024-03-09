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
                <Skill image="assets/aws.png" name="AWS"/>
                <Skill image="assets/terraform.png" name="Terraform"/>
                <Skill image="assets/ansible.png" name="Ansible"/>
                <Skill image="assets/kubernetes.png" name="Kubernetes"/>
                <Skill image="assets/docker.png" name="Docker"/>
                <Skill image="assets/csharp.png" name="CSharp"/>
                <Skill image="assets/golang.png" name="Go Lang"/>
                <Skill image="assets/php.png" name="PHP"/>
                <Skill image="assets/nodejs.png" name="Node.JS"/>
                <Skill image="assets/js.png" name="JavaScript"/>
                <Skill image="assets/ts.png" name="TypeScript"/>
                <Skill image="assets/git.png" name="Git"/>
            </div>
        </div>
    )
}