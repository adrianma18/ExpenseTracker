import React from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <ul>
      {transactions.map((transaction) => (
        <li
          key={transaction.id}
          className="my-[30px] mx-auto border border-blue-500  p-5 flex items-center relative truncate rounded">
          <p className="text-black text-xl">{transaction.name}</p>
          <p className="ml-auto mr-[40px] text-black font-bold text-xl">
            <span className="text-gray-700">€ </span>
            {transaction.amount}
          </p>
          <button
            onClick={() => deleteDocument(transaction.id)}
            className=" absolute top-0 right-0 bg-blue-200 text-blue-600 hover:text-red-500 text-2xl font-bold py-6 px-[8px] text-center leading-none curson-pointer">
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
