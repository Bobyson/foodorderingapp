import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign in");

  return (
    <div className="flex justify-between border border-solid p-2 m-2 rounded-sm">
      <div className="w-20">
        <Link to="/">
          <img className="hover:scale-90 duration-300" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex">
        <ul className="flex items-center px-2">
          <button
            className="login"
            onClick={() => {
              btnName === "Sign in"
                ? setBtnName("Sign out")
                : setBtnName("Sign in");
            }}
          >
            {btnName}
          </button>
          <li className="px-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
