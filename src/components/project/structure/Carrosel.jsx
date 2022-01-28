import React from 'react';
import styles from "../styles/Carrosel.module.css";

import bannerAdocao from "../../../assets/imagens/banner-adocao.png";
import bannerDoacao from "../../../assets/imagens/banner-doacao.png";
import bannerContato from "../../../assets/imagens/banner-contato.png";

export default function Carrosel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className={styles.carrosel_image} src={bannerAdocao} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className={styles.carrosel_image} src={bannerDoacao} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className={styles.carrosel_image} src={bannerContato} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon h-25 bg-dark" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon h-25 bg-dark" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>
    )
}
