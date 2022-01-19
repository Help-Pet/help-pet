import React from 'react';
import {Carousel} from "react-bootstrap";
import styles from "../styles/Carrosel.module.css";

import bannerAdocao from "../../../assets/imagens/banner-adocao-desktop.jpg";
import bannerDoacao from "../../../assets/imagens/banner-doacao-desktop.jpg";
import bannerContato from "../../../assets/imagens/banner-contato-desktop.jpg";

export default function Carrosel() {
    return (
        <Carousel className={styles.carrosel}>
            <Carousel.Item>
                <img
                className={styles.carrosel__image}
                src={bannerAdocao}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={styles.carrosel__image}
                src={bannerDoacao}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={styles.carrosel__image}
                src={bannerContato}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
