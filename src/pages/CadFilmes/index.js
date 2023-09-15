import React, { useEffect, useState } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./CadFilmes.module.css"


function CadFilmes() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [favorit, setFavorit] = useState('');
    const [image_url, setImage_url] = useState('');
    const [message, setMessage] = useState('');

    let handleSubmit = async (e) => {
        e.preventDefalt();
        try {
            let res = await fetch('https://my-json-server.typicode.com/jubinhadograu/fake-api/filmes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name,gender,favorit,image_url
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setName('');
                setGender('');
                setFavorit('');
                setImage_url('');
                setMessage('User created successfully');
            } else {
                setMessage('Some error occurred');
            }
        } catch (err) {
            console.timeLog(err);
        }
    };
    

    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Cadastrar Filmes</h1>
            </Titulo>
            <section className={styles.formulario}>
                <form onSubmit={handleSubmit}>
                <div className={styles.campotexto}>
                    <input
                    className='campotexto'
                    type="text"
                    value={name}
                    placeholder="Inserir Nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    className={styles.campotexto}
                    type="text"
                    value={gender}
                    placeholder="Inserir Genero"
                    onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                    className={styles.campotexto}
                    type="text"
                    value={image_url}
                    placeholder="Inserir Imagem"
                    onChange={(e) => setImage_url(e.target.value)}
                    />
                    <button className={styles.botao} type='submit'>Inserir Filme</button>
                    <div className={message}>{message ? <p>{message}</p> : null}</div>
                </div>
                </form>
            </section>
        
        {/*<Formulario aoFilmeCadastrado={filme => aoNovoFilmeAdicionado(filme)}> */}
        </>
    )
}

export default CadFilmes;