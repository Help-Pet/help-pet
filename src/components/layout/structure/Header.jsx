import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaRegMinusSquare, FaColumns, FaDog, FaEnvelopeOpenText, FaDonate} from "react-icons/fa";

import styles from "../styles/Header.module.css";
import logo from "../../../assets/imagens/logo.png";

export default function Header(){
    return(
        <header> 
            <div>
                <Link to="/">
                    <img src={logo} alt="logo help pet" />
                </Link>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <Link to="/adotar" className={styles.link}><li>Adotar um amigo</li></Link>
                    <Link to="/doar" className={styles.link}><li className={styles.linkDoacao}>Doação</li></Link>
                    <Link to="/contato" className={styles.linkContato}><li>Contato</li></Link>
                </ul>
            </nav>
            <div className={styles.cabecalho_sidebar}>
                <input type="checkbox" name="check" id="check" className={styles.checkbox} />
                <label for="check" className={styles.label}>
                    <FaBars className={styles.btn} />
                    <FaRegMinusSquare className={styles.cancel} />
                </label>
                <div className={styles.sidebar}>
                    <ul className={styles.list}>
                        <li className={styles.list_item}>
                            <a href="/" className={styles.list_item_link}><FaColumns className={styles.link_icon} />Home</a>
                        </li>
                        <li className={styles.list_item}>
                            <a href="/adotar" className={styles.list_item_link}><FaDog className={styles.link_icon} />Adoção</a>
                        </li>
                        <li className={styles.list_item}>
                            <a href="/doar" className={styles.list_item_link}><FaDonate className={styles.link_icon} />Doação</a>
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