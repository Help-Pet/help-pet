import React from 'react';
import { Link } from 'react-router-dom';
import {FaStream, FaRegMinusSquare, FaColumns, FaPaw, FaEnvelopeOpenText, FaDonate, FaHeart, FaQuestionCircle} from "react-icons/fa";

import styles from "../styles/Header.module.css";
import logo from "../../../assets/imagens/logo.png";

export default function Header(){
    return(
        <header> 
            <div className={styles.logo_container}>
                <Link to="/">
                    <img src={logo} alt="logo marlove" className={styles.logo}/>
                </Link>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <Link to="/sobre" className={styles.link}><li>Sobre</li></Link>
                    <Link to="/adotar" className={styles.link}><li>Adotar</li></Link>
                    <Link to="/doar" className={styles.link}><li>Doação</li></Link>
                    <Link to="/parceiros" className={styles.link}><li className={styles.linkParceiros}>Parceiros</li></Link>
                    <Link to="/contato" className={styles.linkContato}><li>Contato</li></Link>
                </ul>
            </nav>
            <div className={styles.cabecalho_sidebar}>
                <input type="checkbox" name="check" id="check" className={styles.checkbox} />
                <label for="check" className={styles.label}>
                    <FaStream className={styles.btn} />
                    <FaRegMinusSquare className={styles.cancel} />
                </label>
                <div className={styles.sidebar}>
                    <ul className={styles.list}>
                        <li className={styles.list_item}>
                            <a href="/" className={styles.list_item_link}><FaColumns className={styles.link_icon} />Home</a>
                        </li>
                        <li className={styles.list_item}>
                            <a href="/sobre" className={styles.list_item_link}><FaQuestionCircle className={styles.link_icon} />Sobre</a>
                        </li>
                        <li className={styles.list_item}>
                            <a href="/adotar" className={styles.list_item_link}><FaPaw className={styles.link_icon} />Adoção</a>
                        </li>
                        <li className={styles.list_item}>
                            <a href="/doar" className={styles.list_item_link}><FaDonate className={styles.link_icon} />Doação</a>
                        </li>
                        <li className={styles.list_item}>
                            <a href="/parceiros" className={styles.list_item_link}><FaHeart className={styles.link_icon} />Parceiros</a>
                        </li>
                        <li className={styles.list_item}>
                            <a href="/contato" className={styles.list_item_link}><FaEnvelopeOpenText className={styles.link_icon} />Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}