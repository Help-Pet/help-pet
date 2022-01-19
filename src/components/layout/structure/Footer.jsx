import React from 'react';
import {Link} from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter} from "react-icons/fa";

import styles from "../styles/Footer.module.css";
import logoFooter from "../../../assets/imagens/logo-footer.png";

export default function Footer(){
    return(
        <footer>
            <section className={styles.first__container}>
                <div className={styles.first__container__logo}>
                    <img src={logoFooter} alt="imagem logo do footer"></img>
                    <p>Somos uma organização que te ajuda a conseguir um filho de 4 patas!</p>
                </div>
                <div className={styles.first__container__links}>
                    <h3>HELP PET</h3>
                    <ul>
                        <Link className={styles.link} to="/adotar">Adotar um pet</Link>
                        <Link className={styles.link} to="/doar">Doar alimento</Link>
                        <Link className={styles.link} to="/contato">Entre em contato</Link>
                    </ul>
                </div>
                <div className={styles.first__container__social}>
                    <ul>
                        <a href="#"><FaFacebook className={styles.icon}/></a>
                        <a href="#"><FaInstagram className={styles.icon} /></a>
                        <a href="#"><FaWhatsapp className={styles.icon} /></a>
                        <a href="#"><FaTwitter className={styles.icon} /></a>
                    </ul>
                </div>
            </section>
        </footer>
    );
}