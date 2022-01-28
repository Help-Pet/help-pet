import React from 'react';

import styles from "../styles/Doar.module.css";
import logoPicpay from "../../../assets/imagens/picpay.png";
import qrCode from "../../../assets/imagens/qrcode.jpg";

export default function Doar(){
    return(
        <main>
            <h1>Doação</h1>
            <p className={styles.p}>Sim, nós dependemos da sua ajuda.</p>
            <p className={styles.p}>Quando resgatamos um animal de abandono ou maus tratos, ele vem direto para uma clinica veterinária, na qual temos parceria, e la ele recebe os primeiros cuidados, faz exames, e inicia os eventuais tratamentos necessários. Depois de tratado, ele vai passar por um processo de castração, só depois disso ele é disponibilizado para adoção.</p>
            <p className={styles.p}>Até que ele seja adotado, esse cão vai estar abrigado, alimentado, e recebendo tudo que precisa para se manter saudável e feliz.</p>
            <p className={styles.p}>Esse prazo pode variar de meses a anos...Durante todo esse tempo, as despesas vão se acumulando...</p>
            <p className={styles.p}>Além disso, temos um compromisso de amizade com protetores indepedentes, no auxilio com alimentação, vacinação, vermifugação, dos animais resgatados por eles. Esse apoio acontece dentro das nossas possibilidades financeiras, mas sempre nos esforçamos para não desampara-los.</p>
            <p className={styles.p}>Como não recebemos nenhum tipo de subsidio do estado, ou qualquer outro órgão público, sua colaboração e generosidade é imprescindível. Se você quiser conhecer mais sobre todo o desenvolvimentro do nosso trabalho, ou até mesmo conhecer nossos santinhos, mande um email e agende sua visita. Não deixe de colaborar, qualquer valor é bem vindo!</p>
            <div className={styles.container__doacao}>
                <div className={styles.container__doacao__doar}>
                    <h3 className={styles.h3}>Doe pela nossa conta bancária</h3>
                    <img className={styles.imgPicpay} src={logoPicpay} alt="logo pic pay" />
                    <p>PicPay Services S.A</p>
                    <p>Instituição 380</p>
                    <p>Agência 0001</p>
                    <p>Número 10471989-3</p>
                </div>
                <div className={styles.container__doacao__doar}>
                    <h3 className={styles.h3}>Se preferir, doe diretamente por pix!</h3>
                    <img className={styles.imgQrcode} src={qrCode} alt="saco de ração" />
                    <p>Chave pix: grupomarlove@gmail.com</p>
                </div>
            </div>
        </main> 
    ); 
}