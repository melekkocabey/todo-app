import Content from "./components/Content";
import Footer from "./components/Footer.js";
import Header from "./components/Header";


function App() {
  return (
    <>
      <section className="todoapp">
        <Header/>
        <Content/>
      </section>
      <Footer/>
  </>);
}

export default App;
