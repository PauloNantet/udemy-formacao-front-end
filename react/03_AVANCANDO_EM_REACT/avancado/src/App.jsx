import "./App.css";

// 02 - imagem assets
import night from "./assets/night.jpg";

// 03 - useState
import Data from "./components/Data";

// 04 - renderização de lista
import ListRender from "./components/ListRender";

// 07 - conditional render
import ConditionalRender from "./components/ConditionalRender";

// 08 - props
import ShowUserName from "./components/ShowUserName";

// 09 - desestruturando props
import CarDetails from "./components/CarDetails";

// 11 - renderização de listas com componentes
const car = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - fragment
import Fragment from "./components/Fragment";

// 13 - children
import Container from "./components/Container";

// 14 - função em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  // 14 - função em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 01 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 02 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 03 - useState */}
      <Data />
      {/* 04 - render de lista */}
      <ListRender />
      {/* 07 - render conditional */}
      <ConditionalRender />
      {/* 08 - props */}
      <ShowUserName name="Paulo Henrique" />
      {/* 09 - desestruturando props */}
      <CarDetails brand={"VM"} km={999} color={"Vermelho"} />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand={"Fiat"} km={123444} color={"Branco"} />
      <CarDetails km={9987} brand={"Audi"} color={"Azul"} />
      {/* 11 - renderização de listas com componentes */}
      {car.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - fragment */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
