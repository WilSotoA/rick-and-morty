import React from "react";
import "./Paginate.css";
import { prevPage, nextPage } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Paginate({ cantPage }) {
  const { numPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="paginate">
      <button onClick={() => dispatch(prevPage())}> &lt; </button>
      <h2 className="numPage">
        {numPage} DE {cantPage}
      </h2>
      <button onClick={() => dispatch(nextPage())}> &gt; </button>
    </div>
  );
}