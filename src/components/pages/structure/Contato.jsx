import React from "react";

import Input from "../../project/structure/Input";
import styles from "../styles/Contato.module.css";

export default function Contact(){
    return(
        <main>
            <h1>Contato</h1>
            <form>
                <Input text="Nome" type="text" name="txtnome" placeH="Digite seu nome" />
                <Input text="Email" type="email" name="txtemail" placeH="Digite seu e-mail" />
                <Input text="Assunto" type="text" name="txtassunto" placeH="Informe o assunto" />
                <textarea name="txtmessage" id="txtmessage" placeholder="Digite sua mensagem..."></textarea>
                <div className={styles.button}>
                    <input className={styles.btnEnviar} type="submit" value="ENVIAR MESSAGEM"/>
                </div>
            </form>
        </main>
    )
}