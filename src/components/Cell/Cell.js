import React from 'react';

function Cell({letter, status}) {
  return <span className={status ? `cell ${status}` : 'cell'}>{letter}</span>;
}

export default Cell;
