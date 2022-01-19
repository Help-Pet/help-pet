import React from 'react';

import Input from '../../project/structure/Input';
import styles from "../styles/Dog.module.css";

export default function Dog({src, alt, nome, descricao, link}) {
    return (
        <div className={styles.container__cachorros__cachorro}>
            <div cl>
                <img src={src} alt={alt} className={styles.img} />
            </div>
            <div>
                <h3 className={styles.h3}>{nome}</h3>
                <p className={styles.p}>{descricao}</p>
            </div>
            <div className={styles.button}>
                <input className={styles.btn__verPerfil} type="submit" value="VER PERFIL" />
            </div>
        </div>
    )
}
