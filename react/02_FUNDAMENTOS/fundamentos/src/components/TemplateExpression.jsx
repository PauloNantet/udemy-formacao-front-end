// 04 - templateexpression
// import React from 'react'

const TemplateExpression = () => {
  const name = "Paulo Henrique";

  const data = {
    age: 35,
    job: "Programador",
  };

  return (
    <div>
      TemplateExpression
      <p>A soma é {2 + 2}</p>
      <h3>Bem vindo {name}</h3>
      <p>
        Sua idade é {data.age} anos e você é um {data.job}
      </p>
    </div>
  );
};

export default TemplateExpression;
