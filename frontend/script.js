let contadorFilas = 0;
let contadorColumnas = 4;

document.getElementById('agregarFila').addEventListener('click', agregarFila);
document.getElementById('agregarColumna').addEventListener('click', agregarColumna);
document.getElementById('guardarDatos').addEventListener('click', guardarDatos);

function agregarFila() {
    contadorFilas++;
    const cuerpoTabla = document.querySelector('#tablaDinamica tbody');
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${contadorFilas}</td>
        <td><input type="text" class="form-control" name="articulo"></td>
        <td><input type="text" class="form-control" name="marca"></td>
        <td><input type="text" class="form-control" name="agrupacion"></td>
        <td><button class="btn btn-danger eliminarFila">Eliminar</button></td>
    `;
    cuerpoTabla.appendChild(nuevaFila);
    nuevaFila.querySelector('.eliminarFila').addEventListener('click', () => eliminarFila(nuevaFila));
}

function agregarColumna() {
    contadorColumnas++;
    const encabezadosTabla = document.getElementById('encabezadosTabla');
    const nuevoEncabezado = document.createElement('th');
    nuevoEncabezado.innerHTML = `
        <input type="text" class="form-control" value="Columna ${contadorColumnas - 1}">
        <button class="btn btn-danger btn-sm eliminarColumna">Eliminar</button>
    `;
    encabezadosTabla.insertBefore(nuevoEncabezado, encabezadosTabla.lastElementChild);

    const filas = document.querySelectorAll('#tablaDinamica tbody tr');
    filas.forEach(fila => {
        const nuevaCelda = document.createElement('td');
        nuevaCelda.innerHTML = `<input type="text" class="form-control" name="col${contadorColumnas - 1}">`;
        fila.insertBefore(nuevaCelda, fila.lastElementChild);
    });

    nuevoEncabezado.querySelector('.eliminarColumna').addEventListener('click', () => eliminarColumna(nuevoEncabezado));
}

function eliminarFila(fila) {
    fila.remove();
    actualizarContadorFilas();
}

function actualizarContadorFilas() {
    contadorFilas = 0;
    const filas = document.querySelectorAll('#tablaDinamica tbody tr');
    filas.forEach((fila, indice) => {
        fila.children[0].innerText = indice + 1;
        contadorFilas++;
    });
}

function eliminarColumna(encabezado) {
    const indiceColumna = Array.from(encabezado.parentElement.children).indexOf(encabezado);
    encabezado.remove();

    const filas = document.querySelectorAll('#tablaDinamica tbody tr');
    filas.forEach(fila => {
        fila.children[indiceColumna].remove();
    });

    contadorColumnas--;
}

function guardarDatos() {
    const tbody = document.querySelector('#tablaDinamica tbody');
    const rows = tbody.rows;

    const datos = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.cells;
        const rowData = {};

        rowData['articulo'] = cells[1].querySelector('input') ? cells[1].querySelector('input').value : cells[1].textContent;
        rowData['marca'] = cells[2].querySelector('input') ? cells[2].querySelector('input').value : cells[2].textContent;
        rowData['agrupacion'] = cells[3].querySelector('input') ? cells[3].querySelector('input').value : cells[3].textContent;

        datos.push(rowData);
    }

    const payload = {
        datos: datos
    };

    console.log(payload);

    // Hacer el fetch al backend
    fetch('http://localhost:8000/api/guardar-datos-tabla', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.statusText}`);
        }
        return response.json();
    })
    .then(result => {
        alert('Datos guardados correctamente');
        console.log("Resultado del guardado:", result);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al guardar los datos');
    });
}