// src/components/Table.js
import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ headers, data, setData, setHeaders }) => {
  const addRow = () => {
    setData([...data, Array(headers.length).fill('')]);
  };

  const addColumn = () => {
    setHeaders([...headers, `Columna ${headers.length}`]);
    setData(data.map(row => [...row, '']));
  };

  const removeRow = (rowIndex) => {
    setData(data.filter((_, index) => index !== rowIndex));
  };

  const removeColumn = (colIndex) => {
    setHeaders(headers.filter((_, index) => index !== colIndex));
    setData(data.map(row => row.filter((_, index) => index !== colIndex)));
  };

  const updateRow = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  const changeColumnType = (event, colIndex) => {
    const type = event.target.value;
    // Additional logic can be added to handle different types
  };

  const saveData = () => {
    // Logic to save data
  };

  return (
    <div>
      <table className="table table-bordered table-striped" id="tablaDinamica">
        <TableHeader
          headers={headers}
          addColumn={addColumn}
          removeColumn={removeColumn}
          changeColumnType={changeColumnType}
        />
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              headers={headers}
              updateRow={updateRow}
              removeRow={removeRow}
            />
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className="btn btn-primary">Agregar Fila</button>
      <button onClick={addColumn} className="btn btn-secondary">Agregar Columna</button>
      <button onClick={saveData} className="btn btn-success">Guardar</button>
    </div>
  );
};

export default Table;
