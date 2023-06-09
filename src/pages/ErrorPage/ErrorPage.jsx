import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import pokebola from "../../assets/pokebola.png";
import { ContainerTela, TituloError } from "../PokedexPage/styled";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ContainerTela>
      <TituloError>
        <h1>
          4 <img src={pokebola} /> 4
        </h1>
        <h2> Uh-oh! </h2>
        <h3> você parece perdido em sua jornada! </h3>
        <button onClick={() => goToHomePage(navigate)}>
          ← Voltar para home
        </button>
      </TituloError>
    </ContainerTela>
  );
};
