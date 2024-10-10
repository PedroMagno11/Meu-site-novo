import SectionTitle from "../SectionTitle"
import styles from "./styles.module.scss"
import Redirecionamento from "../Redirecionamento"

export default function SobreMim(){
    return(
        <div className={styles.sobreMim}>
          <SectionTitle text="Sobre mim"/>
          <p>
            Cursando Ciência da Computação na Universidade Estácio de Sá, tenho experiência prática e teórica em diversas áreas do desenvolvimento de software. Atualmente atuo como desenvolvedor e pesquisador no Instituto de Pesquisas da Marinha (IPqM), onde estou envolvido em projetos que demandam alta capacidade técnica. 
          </p>
          <p>
            Minha trajetória profissional é marcada pelo aprendizado contínuo. Recentemente, tenho dado uma atenção especial à linguagem Java e ao framework Spring Boot, ferramentas que utilizo diariamente em meus projetos. 
            Além disso, possuo também experiência prática com Docker e uma familiaridade com a plataforma de nuvem AWS, incluindo serviços como EC2, S3, VPC, RDS e DynamoDB.
          </p>
          <Redirecionamento/>
        </div>
    )
}