import React from "react";

const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  // 08 - função de renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderizando outra coisa!</h1>;
    }
  };

  //   return 10 > 2 && <p>Caregando...</p>;

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento")}>
          Click aqui!
        </button>
      </div>
      {/* 07 - evento de função */}
      <div>
        <button onClick={handleClick}>Click aqui - com função</button>
      </div>
      {/* 08 - função com render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
