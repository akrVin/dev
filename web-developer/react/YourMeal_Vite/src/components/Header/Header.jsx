import styleHeader from "./Header.module.css";
import logo from "./../../assets/img/logo.svg";
import { Container } from
"./../Container/Container";

export const Header = () => (
    <header className="header">
    <Container className="header__container">
      <img className="header__logo" src={logo}
      alt="Логотип YourMeal"/>

      <div className="header__wrapper">
        <h1 className="header__title">
          <span>Только самые</span>
          <span className="header__red">сочные бургеры!</span>
        </h1>

        <p className="header__appeal">Бесплатная доставка от 599₽</p>
      </div>
    </div>
  </header>
);