"use client";

import "@/components/components.css";
import ADD_PRODUCT_TABME from "@/components/ADD_PRODUCT_TABME";
import USERS_Table from "@/components/USERS_Table";
import ADD_SITE from "@/components/ADD_SITE";
import EXIST_TRANSACTION from "@/components/EXIST_TRANSACTION";
import PAGE2_Buttons from "@/components/PAGE2_Buttons";
import { SetStateAction, useState } from "react";
import AddTransaction from "@/components/ADD_TRANSCATION";


export default function SalesMonitoring() {
  const [activeComponent, setActiveComponent] = useState<null | string>(null);

  const handleButtonClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className="page2_div1">
      <PAGE2_Buttons
        onAddProductClick={() => handleButtonClick("ADD_PRODUCT_TABME")}
        onUsersTableClick={() => handleButtonClick("USERS_Table")}
        onAddSiteClick={() => handleButtonClick("ADD_SITE")}
        onTransactionClick={() => handleButtonClick("EXIST_TRANSACTION")}
        onADDTransactionClick={() => handleButtonClick("ADD_TRANSCATION")}
      />
      {activeComponent === "ADD_PRODUCT_TABME" && <ADD_PRODUCT_TABME />}
      {activeComponent === "USERS_Table" && <USERS_Table />}
      {activeComponent === "ADD_SITE" && <ADD_SITE />}
      {activeComponent === "EXIST_TRANSACTION" && <EXIST_TRANSACTION />}
      {activeComponent === "ADD_TRANSCATION" && <AddTransaction />}
    </div>
  );
}
