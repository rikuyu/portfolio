import "../assets/styles/home.scss";
import Footer from "../components/Footer";

const Top = () => {
  return (
    <div>
      <div className="home-body">
        <div className="title-container">
          <div className="title-home">
            <p>Welcome to</p>
            <p>my Portfolio</p>
          </div>
          <div className="item purple"></div>
          <div className="item medium-blue"></div>
          <div className="item light-blue"></div>
          <div className="item red"></div>
          <div className="item orange"></div>
          <div className="item yellow"></div>
          <div className="item cyan"></div>
          <div className="item light-green"></div>
          <div className="item lime"></div>
          <div className="item magenta"></div>
          <div className="item lightish-red"></div>
          <div className="item pink"></div>
        </div>
        <div className="bottom-bar">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Top;
