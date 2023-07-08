import { SliderWithModal } from "./components/SliderWithModal/SliderWithModal";
import "./app.scss";
import "./abstracts/custom.scss";
import "./abstracts/font.scss";
import "./abstracts/variables.scss";
import { GuessPhone } from "./components/GuessPhone/GuessPhone";

function App() {
  return (
    <main className="app">
      <div className="app__container">
        <h1 className="app__title title">Я - твой чёрный квадрат!</h1>
        <SliderWithModal />
        <GuessPhone />
      </div>
    </main>
  );
}

export { App };
