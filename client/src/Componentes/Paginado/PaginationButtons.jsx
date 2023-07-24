// PaginationButtons.js
import React from "react";
import { useHistory } from "react-router-dom";
import style from './PaginationButtons.modules.css?inline'

const PaginationButtons = ({ currentPage, totalPages, setCurrentPage }) => {

  const history = useHistory();


  const handlePage = (e) => {
    const buttonValue = e.target.name;
    if (!isNaN(parseInt(buttonValue))) {
      setCurrentPage(parseInt(buttonValue));
      history.push(`/productos/page/${parseInt(currentPage + 1)}`);
    }
    if (e.target.name === "PREV") {
      setCurrentPage(currentPage - 1);
      history.push(`/productos/page/${parseInt(currentPage + 1)}`);
    }
    if (e.target.name === "NEXT") {
      setCurrentPage(currentPage + 1);
      history.push(`/productos/page/${parseInt(currentPage + 1)}`);
    }
  };

  const pages =
    totalPages <= 2
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : Array.from({ length: 5 }, (_, i) => currentPage + i - 2).filter(
          (page) => page > 0 && page <= totalPages
        );
  const hideButtonA = currentPage <= 2;
  const hideButtonB = currentPage >= totalPages - 1;



  return (
        <div className={style.homebtnpaginado}> 

             <button disabled={currentPage === 1} onClick={handlePage} name='1'>1</button>
             <button className={style.homebtnprev} disabled={currentPage === 1} onClick={handlePage} name='PREV'>PREV</button>
             {!hideButtonA && <button className={style.homebtnpoints}>...</button>}
             {pages.map((page) => (
             <button
              key={page}
              className={currentPage === page ? 'current-page' : ''}
              onClick={handlePage} name={page}
              >
             {page}
             </button>
             ))}
             {totalPages === 2 && <button key="2" disabled={currentPage === 2} onClick={handlePage} name='2'>2</button>}
             {!hideButtonB && <button className={style.homebtnpoints}>...</button>}
             <button className={style.homebtnnext} disabled={currentPage === totalPages} onClick={handlePage} name='NEXT'>NEXT</button>
             <button disabled={currentPage === totalPages} onClick={handlePage} name={totalPages}>{totalPages}</button>

        </div>
  );
};

export default PaginationButtons;