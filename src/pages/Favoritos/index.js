import React, { useState, useEffect } from "react";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";

function Favoritos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/filmes?favorit=1')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
                console.log(dados)
            })
    }, [])

    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;