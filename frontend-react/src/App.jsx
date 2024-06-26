// src/App.js
import React, { useState } from 'react';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState(['Código', 'Artículo', 'Marca', 'Agrupación']);
  const [data2, setData2] = useState([]);
  const [headers2, setHeaders2] = useState(['Código', 'Artículo', 'Marca', 'Agrupación']);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white text-center">Artículos</div>
        <div className="card-body">
          <Table headers={headers} data={data} setData={setData} setHeaders={setHeaders} />
          <Table headers={headers2} data={data2} setData={setData2} setHeaders={setHeaders2} />

        </div>
      </div>
    </div>
  );
}

export default App;
