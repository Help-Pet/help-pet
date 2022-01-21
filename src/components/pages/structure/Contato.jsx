import React from "react";

import Input from "../../project/structure/Input";
import styles from "../styles/Contato.module.css";

export default function Contact(){
    return(
        <main>
            <h1 className={styles.h1}>Formulário de Contato</h1>
            <form action="../scripts/sendemail.php" method="POST" enctype="multipart/form-data">
                <Input text="Nome" type="text" id="inputNome" name="nome" placeH="Digite seu nome" />
                <Input text="Email" type="email" id="inputEmail" name="email"  placeH="Digite seu e-mail" />
                <Input text="Assunto" type="text" id="txtassunto" name="assunto" placeH="Informe o assunto" />
                <textarea name="txtmessage" id="textAreaMensagem" name="mensagem" placeholder="Digite sua mensagem..."></textarea>
                <div className={styles.button}>
                    <input className={styles.btnEnviar} type="submit" value="ENVIAR MESSAGEM"/>
                </div>
            </form>
        </main>
    )
}