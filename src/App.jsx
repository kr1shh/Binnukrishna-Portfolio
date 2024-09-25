import { About, Contact, Experience, Hero, Skills, Work } from "./containers";
import Nav from "./components/Nav/Nav"

function App() {
  return (
    <>
      <Nav/>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Work/>
      <Contact />
    </>
  );
}

export default App;
