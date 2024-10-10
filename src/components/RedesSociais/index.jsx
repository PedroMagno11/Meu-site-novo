import LinkedinIcon from "../icons/LinkedinIcon";
import InstaIcon from "../icons/InstaIcon";
import GitHubIcon from "../icons/GitHubIcon";
import SectionTitle from "../SectionTitle";
import EmailIcon from "./../icons/EmailIcon";
import styles from "./styles.module.scss";
import YoutubeIcon from './../icons/YoutubeIcon';
import Button from "../Button";

export default function RedesSociais(){
    return(
        <div className={styles.container}>
            <SectionTitle text="Redes Sociais"/>
            <div className={styles.social}>
                <a href="https://www.instagram.com/pedromagno_627/" target="blank">
                    <InstaIcon/>
                </a> 
                <a href="https://www.linkedin.com/in/pedro-magno-017a64253/" target="blank">
                    <LinkedinIcon/>
                </a>
                <a href="https://github.com/PedroMagno11" target="blank">
                    <GitHubIcon/>
                </a>
                <a href="https://www.youtube.com/@dev_crazy" target="blank">
                    <YoutubeIcon/>
                </a>
            </div>
            <Button href="mailto:pedromagnopro@gmail.com">
                Fale comigo <EmailIcon/>
            </Button>
        </div>
        
    )
}