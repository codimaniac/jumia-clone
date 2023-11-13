import Jumia from "../assets/group.png";
import NavDropDownBtn from "./NavDropDownBtn";

function StickyNavBar() {
  return (
    <nav className="flex-between sticky top-0 bg-white py-4 px-[5%]">
      <img src={Jumia} alt="Jumia Logo" width="150px" height="auto" />
      <form action="#" method="get" className="flex-between">
        <div className="search-form">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="search-text"
            name="ItemSearched"
            id="ItemSearched"
            placeholder="Search products, brands and categories"
          />
        </div>
        <input type="submit" value="Search" className="nav-search-btn" />
      </form>
      <NavDropDownBtn
        icon={<i className="bi bi-person"></i>}
        btnValue="Account"
        isDropDown={true}
      />
      <NavDropDownBtn
        icon={<i className="bi bi-question-circle"></i>}
        btnValue="Help"
        isDropDown={true}
      />
      <NavDropDownBtn
        icon={<i className="bi bi-cart3"></i>}
        btnValue="Cart"
        isDropDown={false}
      />
    </nav>
  );
}

export default StickyNavBar;
