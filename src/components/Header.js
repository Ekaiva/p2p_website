import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg"
import wallet from "../../public/wallet.svg"
const Header = () => {
  return (
    <>
      <div className="header_card">
        <div className="inner_card">
            <div className="css-1lekzkb">
           <a>
               <Image src={logo} width={145} height={28} alt="p2p" />
               
           </a>
           <div className="chakra-stack css-g60g6i chakra">
               <span className="wallet">
                   <Image src={wallet}/>
               </span>
               <span className="signin">
                   Sign in with wallet
               </span>

           </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Header;
