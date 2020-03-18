import React, { useState } from 'react';
import Menu from './menu';
import Order from './order';

function WaiterView() {
  const [arrOrder, setArrOrder] = useState([]);

  const agregarProductoAlPedido = (obj) => {
    const newobj = {
      producto: obj.descripcion,
      precio: obj.precio,
      id: obj.id,
      cantidad: 1,
    };
    const filterProducts = arrOrder.filter((element) => element.id === newobj.id);
    const newArray = arrOrder.concat([newobj]);
    const mapProducts = arrOrder.map((element) => {
      const elementCantidad = element;
      if (element.id === newobj.id) elementCantidad.cantidad += 1;
      console.log(elementCantidad);

      return elementCantidad;
    });

    if (filterProducts.length === 0) {
      setArrOrder(newArray);
    } else {
      setArrOrder(mapProducts);
    }
  };

  return (
    <div className="d-flex bd-highlight">
      <div className="p-2 flex-fill bd-highlight">
        <Menu agregar={agregarProductoAlPedido} />
      </div>
      <div className="p-2 flex-fill bd-highlight">
        <Order agregar={arrOrder} />
      </div>
    </div>
  );
}

export default WaiterView;
