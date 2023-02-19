import "./Cep.css";
import { useState, useRef } from "react";
import { UseCorreiosCep } from "../components/UseCorreiosCep";
import imgLocalizar from "../assets/location.svg";

import SearchIcon from "@mui/icons-material/Search";
import { Input, InputAdornment } from "@mui/material";

function Cep() {
  const [cep2, setCep2] = useState("");
  const [cep, setCep] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { endereco, isValid } = UseCorreiosCep(cep);

  function handleChange(e: any) {
    e.preventDefault();

    setCep(cep2);

    if (inputRef.current) {
      inputRef.current.focus();
    }
    setCep2("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleChange(event);
    }
  }

  return (
    <div>
      <div className="Tranking">
        <h1>
          <img src={imgLocalizar} alt="" />
          CEP Traking
        </h1>
        <div>
          <Input
            className="InputPesquisar"
            type="number"
            inputProps={{ min: "00000000" }}
            value={cep2}
            ref={inputRef}
            placeholder="Insira seu CEP"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            onChange={(e) => setCep2(e.target.value)}
            onKeyDown={handleKeyDown}
            disableUnderline
          />
        </div>
        <div className="button">
          <button onClick={handleChange}>SEARCH</button>
        </div>
      </div>
      {isValid ? (
        <div className="CEP2">
          <h3>Resultado da Busca pelo CEP</h3>
          <p>CEP: {endereco.cep}</p>
          <p>Logradouro: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Cep;
