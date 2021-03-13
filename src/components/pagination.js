import React from 'react';


const Pagination = ({count, current, onSelect}) => {
  if (count < 2) return (<></>)

  const pages = [];
  for (let i=1; i<=count; i++){
    pages.push(
        <li key={i} className={(i===current)?"page-item active":"page-item"}
          onClick={() => onSelect(i)}
          >
          <a className="page-link" href="#back">{i}</a>
        </li>
    )
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={(current===1)? "page-item disabled": "page-item"}
          onClick={() => onSelect(current-1)} >
          <a className="page-link" href="#{i}" >Previous</a>
        </li>
        { pages }
        <li className={(current===count)?"page-item disabled":"page-item"}
          onClick={() => onSelect(current+1)} >
          <a className="page-link" href="#next">Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;
