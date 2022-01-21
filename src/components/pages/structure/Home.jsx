import React from "react";

import Carrosel from "../../project/structure/Carrosel";
import Dog from "../../project/structure/Dog";
import styles from "../styles/Home.module.css";

// IMAGENS
import dog1 from "../../../assets/imagens/dog1.jpg";
import dog2 from "../../../assets/imagens/dog2.jpg";
import dog3 from "../../../assets/imagens/dog3.jpg";
import dog4 from "../../../assets/imagens/dog4.jpg";
import dog5 from "../../../assets/imagens/dog5.jpg";
import dog6 from "../../../assets/imagens/dog6.jpg";
import dog7 from "../../../assets/imagens/dog7.jpg";
import dog8 from "../../../assets/imagens/dog8.jpg";
import dog9 from "../../../assets/imagens/dog9.jpg";


export default function Home(){
    return(
        <main className="container-fluid p-0 m-0">
           <Carrosel />

           <section className={styles.section}>
               <h1 className={styles.h1}>Adote um amigo</h1>
               <div className={styles.container__cachorros}>
                   <Dog src={dog1} alt="imagem cachorro 1" nome="Tornado" descricao="Macho de porte médio" />
                   <Dog src={dog2} alt="imagem cachorro 2" nome="Spaike" descricao="Macho de porte grande" />
                   <Dog src={dog3} alt="imagem cachorro 3" nome="Jujuba" descricao="Fêmea de porte pequeno" />
                   <Dog src={dog4} alt="imagem cachorro 4" nome="Lili" descricao="Fêmea de porte grande" />
                   <Dog src={dog5} alt="imagem cachorro 5" nome="Laika" descricao="Fêmea de porte pequeno" />
                   <Dog src={dog6} alt="imagem cachorro 6" nome="Mesclado" descricao="Macho de porte médio" />
                   <Dog src={dog7} alt="imagem cachorro 7" nome="Thor" descricao="Macho de porte médio" />
                   <Dog src={dog8} alt="imagem cachorro 8" nome="Kaysar" descricao="Fêmea de porte grande" />
                   <Dog src={dog9} alt="imagem cachorro 9" nome="Mary" descricao="Fêmea de porte pequeno" />
               </div>
               <div className={styles.button}>
                   <input className={styles.btnVermais} type="submit" value="VER MAIS" />
               </div>
           </section>
        </main>
    )
}