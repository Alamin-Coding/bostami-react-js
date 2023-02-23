// import logo from './bg-light.jpg';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  let bgLight = {
    background:  "url('./images/bg-light.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  // let bgDark = {
  //   background:  "url('./images/bg-dark.jpg')",
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   backgroundAttachment: 'fixed',
  // }


  return (
    <div style={bgLight}>
      <Header></Header>
      <main>
        <section className="main_section mt-40">
          <div className="container grid grid-cols-12 lg:gap-10">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            {/* right site */}
            <MainContent></MainContent>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
