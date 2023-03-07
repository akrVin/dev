import style from 'OrderGoods.module.css';


export const OrderGoods = () => {

  return (
    
    <li className={style.order__item}>
      <img className={style.order__image} src="img/burger_1.jpg" alt="Супер сырный" />

      <div className="goods">
        <h3 className="goods__title">Супер сырный</h3>

        <p className="goods__weight">512г</p>

        <p className="goods__price">1279
          <span className="currency">₽</span>
        </p>
      </div>

      <div className="count">
        <button className="count__minus">-</button>
        <p className="count__amount">1</p>
        <button className="count__plus">+</button>
      </div>
    </li>
  );
}