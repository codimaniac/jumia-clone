import JumiaLight from "../assets/jumia_light.svg";
import Jumia from "../assets/group.png";
import JumiaPay from "../assets/jumia-pay-logo-white.svg";
import JumiaFood from "../assets/jumiafood-logo.svg";
// import JumiaLogistics from "../assets/svg-export/.svg"

function SubsidiariesNav() {
  return (
    <header>
      <div className="jumia-marketplace-vendor-link">
        <img
          src={JumiaLight}
          alt="Jumia Light Logo"
          width="15px"
          height="auto"
        />
        <a className="" href="#">
          Sell on Jumia
        </a>
      </div>
      <div className="jumia-subsidiary-links">
        <a href="#">
          <img src={Jumia} width="60px" height="auto" />
        </a>
        <a href="#">
          <img src={JumiaPay} width="60px" height="auto" />
        </a>
        <a href="#">
          <img src={JumiaFood} width="60px" height="auto" />
        </a>
        <a href="#">
          <img src={JumiaPay} width="60px" height="auto" />
        </a>
      </div>
    </header>
  );
}

export default SubsidiariesNav;
