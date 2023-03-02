import styleHeader from "./Header.module.css";
import logo from "./../../assets/img/logo.svg";
import { Container } from "./../Container/Container";

export const Header = () => (
  <header className={styleHeader.header}>
    <Container className={styleHeader.header__container} />
      <img className={styleHeader.header__logo} src={logo}
      alt="Логотип YourMeal"/>

      <div className={styleHeader.header__wrapper}>
        <h1 className={styleHeader.header__title}>
          <span>Только самые</span>
          <span className={styleHeader.header__red}>сочные бургеры!</span>
        </h1>

        <p className={styleHeader.header__appeal}>Бесплатная доставка от 599₽</p>
      </div>
  </header>
);