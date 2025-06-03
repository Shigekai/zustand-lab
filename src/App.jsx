import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Rodape from "./components/Rodape";
import { HomePage } from "./pages/HomePage";
import { TicTacToe } from "./pages/TicTacToe";

function App() {
    const modoCronometro = {
        id: "foco",
        nome: "Foco",
        frase: ["Otimize sua produtividade, ", "mergulhe no que importa."],
        tempoInicialEmSegundos: 30,
    };

    return (
        <Router>
            <div className={styles[`app--${modoCronometro.id}`]}>
                <Cabecalho />

            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                </Routes>
            </main>

            <Rodape />
            </div>
        </Router>
    );
}

export default App;
