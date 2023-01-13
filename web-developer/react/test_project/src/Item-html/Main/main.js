const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="content">
          <div className="content__body">
            <section className="content__nav">
              <nav className="navigation">
                <ul className="navigation__list">
                  <li className="navigation__item"><a className="navigation__link" href="#">Profile</a></li>
                  <li className="navigation__item"><a className="navigation__link" href="#">Messages</a></li>
                  <li className="navigation__item"><a className="navigation__link" href="#">News</a></li>
                  <li className="navigation__item"><a className="navigation__link" href="#">Music</a></li>
                  <li className="navigation__item"><a className="navigation__link" href="#">Settings</a></li>
                </ul>
              </nav>
            </section>
            <section className="content__prof profile">
              <div className="profile__header">
                <div className="profile__header-conteiner">
                  <div className="profile__header-bg">
                   <img className="profile__header-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOGjQkXiha6ynmhBUlRLiTYx7kylUdvCpE11GO3My&s" alt="" /> 
                  </div>
                </div>
              </div>
              <div className="profile__user user">
                <div className="user__container">
                  <div className="user__image-container">
                    <a className="user__image-link" href="#">
                      <img className="user__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPODePIAN-MCvk9lAoAOgmNjtTSHmerJoJDwXV13uVNfMztrH-bUZWQaEb3Pay5XYhqS0&usqp=CAU" alt="" />
                    </a>
                  </div>

                </div>
              </div>
              <div className="profile__my-posts">posts</div>
            </section>
          </div>
        </div> 
      </div>
    </main>
  );
}

export default Main;
