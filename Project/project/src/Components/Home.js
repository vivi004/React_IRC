import Log from "./Login";
import { Link } from 'react-router-dom';
import img1 from '../Assets/Img/coin.jpg';
import Nav from "./Nav";

function Main() {
  return (
    <>
      <Nav />
      <div>
        <div className="first">
          <p className="line">
            We Will Cover 100% Of Your Medical Expenses*
            <p className="line2">
              Create A Free Fundraiser & Get Donations From 30 Lakh+ Donors.
            </p>
          </p>
        </div>
        <img src={img1} alt="coin" />
        <div className="foot">
          <footer>
            <p className="fut">
              Get Financial Assistance For Your Medical Expenses & Treatment Costs.
            </p>
            <button className="butt">Contact us</button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Main;
