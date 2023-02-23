// import logo from './logo.svg';

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
