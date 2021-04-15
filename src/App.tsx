import navbar from "./Components/Navbar";
import footer from "./Components/Footer";
import taskUI from "./Components/TaskUI";

/**
 * Returns the base application. This sets up the main UI frames.
 * @return {Application}
 */
function App() {
  return (
    <div className="flex flex-col h-screen">
      <header>{navbar()}</header>
      <main className="flex-1 overflow-y-auto mb-20">{taskUI()}</main>
      <footer className="fixed bottom-0 w-full isolation-auto">
        {footer()}
      </footer>
    </div>
  );
}

export default App;
