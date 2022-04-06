import React, {useState} from "react";
import classes from "./Paginator.module.css";

let Paginator = ({portionSize = 10, totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
            <div>
                {portionNumber > 1 &&
                <button onClick={ () => {setPortionNumber(portionNumber - 1)}}>PREV</button> }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                    return <span className={currentPage === p && classes.selected}
                                 key={p}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p} </span>
                })}
                {portionCount > portionNumber &&
                <button onClick={ () => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            </div>
)}
export default Paginator;