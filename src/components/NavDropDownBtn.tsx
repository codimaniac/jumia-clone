import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  btnValue: string;
  isDropDown: Boolean;
}

function NavDropDownBtn({ icon, btnValue, isDropDown }: Props) {
  return (
    <div className="nav-dropdown-btn">
      {icon}
      <span>{btnValue}</span>
      {isDropDown && <i className="fi fi-bs-angle-down"></i>}
    </div>
  );
}

export default NavDropDownBtn;
