// src/components/TableHeader.js
import React from 'react';

const TableHeader = ({ headers, addColumn, removeColumn, changeColumnType }) => {
  return (
    <thead className="thead-light">
      <tr>
        {headers.map((header, index) => (
          <th key={index}>
            <input type="text" className="form-control" value={header} readOnly />
            {index >= 4 && (
              <>
                <select className="cambiarTipo" onChange={(e) => changeColumnType(e, index)}>
                  <option value="text">Texto</option>
                  <option value="number">Número</option>
                </select>
                <button className="btn btn-danger btn-sm eliminarColumna" onClick={() => removeColumn(index)}>
                  Eliminar
                </button>
              </>
            )}
          </th>
        ))}
        <th>Acciones</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
