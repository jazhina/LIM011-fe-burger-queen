import React from 'react';

function Aditional({ objeto, agregar, total }) {
  console.log(objeto);

  return (
    <tr>
      <td>{objeto.descripcion}</td>
      <td>{objeto.precio}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
          onClick={(event) => {
            event.preventDefault();
            console.log(objeto);
            agregar(objeto, true);
            total(objeto);
          }}
        />
      </td>
    </tr>
  );
}
export default Aditional;
