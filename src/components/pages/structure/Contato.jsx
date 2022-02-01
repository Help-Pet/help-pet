import React from "react";

import Input from "../../project/structure/Input";
import styles from "../styles/Contato.module.css";

export default function Contact(){
    return(
        <main>
            <h1>Formulário de Contato</h1>
            <form action="http://localhost:8080/GitProjetoSocial/help-pet/src/components/pages/scripts/contato_sendemail.php" method="POST" enctype="multipart/form-data">
                <Input text="Nome" type="text" id="inputNome" name="nome" placeholder ="Digite seu nome" />
                <Input text="Email" type="email" id="inputEmail" name="email"  placeholder ="Digite seu e-mail" />
                <Input text="Assunto" type="text" id="txtassunto" name="assunto" placeholder ="Informe o assunto" />
                <textarea name="txtmessage" id="textAreaMensagem" name="mensagem" placeholder ="Digite sua mensagem..."></textarea>
                <label htmlFor="inputfile" className={styles.file}>
                    <span>Algum arquivo? (opcional):</span>
                    <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
                    <input type="file" id="inputfile" name="file" accept=".pdf, .doc, audio/*, video/*, image/*" />
                </label>
                <div className={styles.button}>
                    <input className={styles.btnEnviar} type="submit" value="ENVIAR MESSAGEM"/>
                </div>
            </form>
        </main>
    )
}