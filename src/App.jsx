import { Header } from "./components/Header/Header";
import { CoreConepets } from "./components/CoreConcepts";
import { Examples } from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConepets />
        <Examples />
      </main>
    </>
  );
}

export default App;
