// src/components/TableRow.js
import React from 'react';

const TableRow = ({ row, rowIndex, headers, updateRow, removeRow }) => {
  return (
    <tr>
      <td>{rowIndex + 1}</td>
      {headers.slice(1).map((header, index) => (
        <td key={index}>
          <input
            type="text"
            className="form-control"
            value={row[index + 1] || ''}
            onChange={(e) => updateRow(rowIndex, index + 1, e.target.value)}
          />
        </td>
      ))}
      <td>
        <button className="btn btn-danger eliminarFila" onClick={() => removeRow(rowIndex)}>
          Eliminar
        </button>
        {/* Aquí puedes añadir otros botones de acción si es necesario */}
      </td>
    </tr>
  );
};

export default TableRow;
