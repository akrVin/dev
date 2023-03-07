import { Catalog } from "./components/Catalog/Catalog";
import { Header } from "./components/Header/Header";
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';




export const App = () => {

  return (
    <>
      <Header />

      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </>
  );
}
