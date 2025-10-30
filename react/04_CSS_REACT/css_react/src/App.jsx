import "./App.css";

// 02 - css de componente
import MyComponent from "./components/MyComponent";
import Title from "./components/title";

function App() {
  // 04 - inline style dinamico
  const n = 15;

  // 05 - classes dinamicas
  const redTitle = true;

  return (
    <div className="App">
      {/* 01 - css global */}
      <h1 className="title">CSS no React</h1>
      {/* 02 - css de componenente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 03 - inline style */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}
      >
        Este elemento tem estilos inline
      </p>
      {/* 04 - inline style dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico 2
      </h2>
      {/* 05 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe{" "}
      </h2>
      {/* 06 - css modules */}
      <Title />
    </div>
  );
}

export default App;
