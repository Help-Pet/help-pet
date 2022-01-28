import React from 'react';

import styles from "../styles/Sobre.module.css";
import imagem1 from "../../../assets/imagens/about-marlove.jpg";
import imagem2 from "../../../assets/imagens/about-marlove2.jpg";
import imagem3 from "../../../assets/imagens/about-marlove3.jpg";
import imagem4 from "../../../assets/imagens/about-marlove4.jpg";

export default function Sobre(){
    return(
        <main>
            <h1 className={styles.h1}>Sobre a Marlove</h1>
            <p className={styles.p}>MARLOVE (MAR DE AMOR) = aparência do Bob MARLEY e muito LOVE para distribuir. Assim surgiu essa pessoa inspiradora que dedicou sua vida as criaturas de Deus. Pombos, gatos e cães necessitados e abandonados tiveram a sorte de conhecer o amor e a mão amiga desse homem extraordinário que mesmo sem condições financeiras, dividia o pouco que tinha e não se importava em pedir ajuda aos outros, nem em ser chamado de louco. Pois cuidar de um animal não é loucura, é um ato de amor, Marlove era assim, puro amor aos animais, mostrou que não é preciso ter muito para ajudar, basta ter vontade. Nos deixou precocemente, mas seu legado de amor aos animais não se perderá, hoje nosso grupo de voluntários dá continuidade a sua trajetória, levamos o nome PROTETORES MARLOVE, nossas ações são coletivas, nos revezamos  diariamente na alimentação e cuidamos de animais abandonados e carentes, encaminhamos estes para castração, com o intuito de diminuir o descarte desses animais e ninhadas indesejáveis, fazemos alguns resgates, quando conseguimos doações para custear os tratamentos, os animais resgatados e castrados se recuperam em lar temporário, oferecido pelos próprios membros do grupo, abrimos as portas de nossas casas para cuidar e dar amor a esses animais necessitados que ao se recuperarem são encaminhados para adoção responsável, selecionada e acompanhada por nós. Não temos vínculo com nenhum órgão, não recebemos verba de governo, tudo que fazemos só é possível com a colaboração financeira de membros do grupo e outras pessoas que nos acompanham e sabem que nosso trabalho é sério. Buscamos parcerias com cínicas e hospitais veterinários, instituições públicas e privadas etc. 
            Desta forma nosso grupo continua a luta e o lindo trabalho de amor aos animais que uma pessoa iluminada fazia solitário... MARLOVE!</p>
            <section className={styles.section}>
                <img src={imagem1} alt="sobre a marlove" className={styles.image}/>
                <img src={imagem2} alt="sobre a marlove" className={styles.image}/>
                <img src={imagem3} alt="sobre a marlove" className={styles.image}/>
                <img src={imagem4} alt="sobre a marlove" className={styles.image}/>
            </section>
        </main> 
    );
}