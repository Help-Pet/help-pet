import React from 'react';
import { Link } from 'react-router-dom';

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
            <nav>
                <ul>
                    <Link to="/adotar" className={styles.link}><li>Adotar um amigo</li></Link>
                    <Link to="/doar" className={styles.link}><li className={styles.linkDoacao}>Doação</li></Link>
                    <Link to="/contato" className={styles.linkContato}><li>Contato</li></Link>
                </ul>
            </nav>
        </header>
    );
}