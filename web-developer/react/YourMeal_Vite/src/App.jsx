import { Container } from "./components/Container/Container";
import Header from "./components/Header";


export const App = () => {

  return (
    <>
      <Header />
      <main>
        <nav>
          <Container andrey="Nikolaevich" className="navigation__container"/>
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}
