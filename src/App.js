import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Menu from "./components/Menu";
import Story1 from "./components/stories/Story1";
import Story2 from "./components/stories/Story2";
import Story3 from "./components/stories/Story3";
import Story4 from "./components/stories/Story4";
import Story5 from "./components/stories/Story5";
import Story6 from "./components/stories/Story6";
import Story7 from "./components/stories/Story7";
import Story8 from "./components/stories/Story8";
import Story9 from "./components/stories/Story9";
import Story10 from "./components/stories/Story10";
import Quiz1 from "./components/quizes/Quiz1";
import Quiz2 from "./components/quizes/Quiz2";
import Quiz3 from "./components/quizes/Quiz3";
import Quiz4 from "./components/quizes/Quiz4";
import Quiz5 from "./components/quizes/Quiz5";
import Quiz6 from "./components/quizes/Quiz6";
import Quiz7 from "./components/quizes/Quiz7";
import Quiz8 from "./components/quizes/Quiz8";
import Quiz9 from "./components/quizes/Quiz9";
import Quiz10 from "./components/quizes/Quiz10";
import About from "./components/About";
import Meaning from "./components/Meaning";
import Meaning2 from "./components/Meanings/Meaning2";
import Meaning3 from "./components/Meanings/Meaning3";
import Meaning4 from "./components/Meanings/Meaning4";
import Meaning5 from "./components/Meanings/Meaning5";
import Meaning6 from "./components/Meanings/Meaning6";
import Meaning7 from "./components/Meanings/Meaning7";
import Meaning8 from "./components/Meanings/Meaning8";
import Meaning9 from "./components/Meanings/Meaning9";
import Meaning10 from "./components/Meanings/Meaning10";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story1" element={<Story1 />} />
        <Route path="/story2" element={<Story2 />} />
        <Route path="/story3" element={<Story3 />} />
        <Route path="/story4" element={<Story4 />} />
        <Route path="/story5" element={<Story5 />} />
        <Route path="/story6" element={<Story6 />} />
        <Route path="/story7" element={<Story7 />} />
        <Route path="/story8" element={<Story8 />} />
        <Route path="/story9" element={<Story9 />} />
        <Route path="/story10" element={<Story10 />} />
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="/quiz4" element={<Quiz4 />} />
        <Route path="/quiz5" element={<Quiz5 />} />
        <Route path="/quiz6" element={<Quiz6 />} />
        <Route path="/quiz7" element={<Quiz7 />} />
        <Route path="/quiz8" element={<Quiz8 />} />
        <Route path="/quiz9" element={<Quiz9 />} />
        <Route path="/quiz10" element={<Quiz10 />} />
        <Route path="/about" element={<About />} />
        <Route path="/meaning1" element={<Meaning />} />
        <Route path="/meaning2" element={<Meaning2 />} />
        <Route path="/meaning3" element={<Meaning3 />} />
        <Route path="/meaning4" element={<Meaning4 />} />
        <Route path="/meaning5" element={<Meaning5 />} />
        <Route path="/meaning6" element={<Meaning6 />} />
        <Route path="/meaning7" element={<Meaning7 />} />
        <Route path="/meaning8" element={<Meaning8 />} />
        <Route path="/meaning9" element={<Meaning9 />} />
        <Route path="/meaning10" element={<Meaning10 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
