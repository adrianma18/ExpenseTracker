import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className="grid grid-cols-3 gap-1 max-w-[960px] my-[60px] mx-auto">
      <div className="pr-[30px] col-span-2">
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className="pl-[30px] col-span-1">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
