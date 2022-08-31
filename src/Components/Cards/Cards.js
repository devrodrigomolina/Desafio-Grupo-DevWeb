import React, { useEffect, useState } from "react";
import style from "./Cards.module.css";

const Cards = ({ lista }) => {
  const { nome } = lista.dados;
  const [especial, setEspecial] = useState([]);
  const [servico, setServico] = useState([]);
  useEffect(() => {
    lista.servicos.map(({ texts, nome }) => {
      const a = texts.filter((obj) =>
      obj.value === nome
      ? setEspecial((oldSpecial) => [...oldSpecial, obj.value])
      : setServico((oldService) => [...oldService, obj.value])
      );
    });
  }, []);
  
  console.log(especial)
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.box}>
          <div className={style.content}>
            <h2 className={style.nome}>{nome}</h2>
            <h4 className={style.subtitulo}>Serviços especiais:</h4>
            {especial.map((servicoEspecial) => (
              <p className={style.conteudo}>{servicoEspecial}</p>
            ))}

            <h4 className={style.subtitulo}>Todos serviços:</h4>
            {servico.map((servicoComun) => (
              <p className={style.conteudo}>{servicoComun}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
