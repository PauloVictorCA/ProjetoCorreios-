import { useState, useEffect } from "react";

interface CepValidationResponse {
  erro: boolean;
}

export const UseCorreiosCep = (cep: any) => {
  const [endereco, setEndereco] = useState<any>({});
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const infCepValidation = async () => {
      try {
        //validando o cep
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data: CepValidationResponse = await response.json();
        setIsValid(!data.erro);

        //colocando o trazendo o objeto do cep
        const back = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await back.json();
        setEndereco(dados);
      } catch (error) {
        console.error(error);
      }
    };
    infCepValidation();
  }, [cep]);

  return { endereco, isValid };
};
