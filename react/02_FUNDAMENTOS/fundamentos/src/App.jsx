import "./App.css";

// 02 - importando componente
import FirstComponent from "./components/FirstComponent";

// 04 - template expression
import TemplateExpression from "./components/TemplateExpression";

// 05 - hierarquia de componentes
import MyComponent from "./components/MyComponent";

// 06 - eventos
import Events from "./components/Events";

function App() {
  // 03 - comentários
  return (
    <div className="App">
      {/* 03 - comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
