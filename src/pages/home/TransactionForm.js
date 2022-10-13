import React, { useEffect } from "react";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <>
      <h3 className="text-blue-600 mb-[20px] text-xl font-bold">
        Add a Transaction
      </h3>
      <form
        onSubmit={handleSubmit}
        className="p-[12px] sm:p-[20px] bg-blue-600 rounded-lg">
        <label className="my-0 block text-white">
          <span>Transaction Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="text-black block w-full p-[10px] mt-[8px] box-border border-0 rounded "
          />
        </label>
        <label className="my-0  block text-white mt-4">
          <span>Amount (€):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="text-black block w-full p-[10px] mt-[8px] box-border border-0 rounded "
          />
        </label>
        <button className="text-xs sm:text-base text-white border-2 py-[6px] px-[12px] bg-transparent cursor-pointer rounded w-full mt-6 font-bold hover:text-yellow-400 hover:border-yellow-400">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default TransactionForm;
