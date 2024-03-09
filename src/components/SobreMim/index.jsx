import SectionTitle from "../SectionTitle"
import styles from "./styles.module.scss"
import Redirecionamento from "../Redirecionamento"

export default function SobreMim(){
    return(
        <div className={styles.sobreMim}>
          <SectionTitle text="Sobre mim"/>
          <p>Estou em busca de oportunidades de estágio que me permitam aplicar e aprimorar meus conhecimentos em desenvolvimento de software.
            </p>
            <p>Possuo habilidades em constante aprimoramento no ecossistema .NET, com foco especial na linguagem C#. Além disso, tenho experiência 
              prática com Docker e familiaridade com a plataforma de nuvem AWS, tendo conhecimentos sólidos em alguns serviços como EC2, S3, 
              VPC, RDS, e DynamoDB.</p>
            <Redirecionamento/>
        </div>
    )
}