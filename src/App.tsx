import navbar from './Components/Navbar';
import footer from './Components/Footer';
import taskUI from './Components/TaskUI';

/**
 * Returns the base application. This sets up the main UI frames.
 * @return {Application}
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>{navbar()}</header>
      <main className="flex-grow">{taskUI()}</main>
      <footer>{footer()}</footer>
    </div>
  );
}

export default App;
