import { useState } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TaskUI from "./Components/TaskUI";

function App() {
  const [options, setOptions] = useState({ darkMode: false });

  const darkModeEnabled = () => (options.darkMode ? "dark" : "");

  return (
    <div class="flex flex-col min-h-screen">
      <header>{Navbar()}</header>
      <main class="flex-grow">{TaskUI()}</main>
      <footer>{Footer()}</footer>
    </div>
  );
}

export default App;
