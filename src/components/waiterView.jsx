import React, { useState } from 'react';
import Menu from './menu';
import Order from './order';

function WaiterView() {
  const [arrOrder, setArrOrder] = useState([]);

  const agregarProductoAlPedido = (obj) => {
    const newobj = {
      producto: obj.descripcion,
      precio: obj.precio,
      cantidad: 1,
    };
    const newArray = arrOrder.concat([newobj]);
    setArrOrder(newArray);
    console.log(newArray);
  };
  return (
    <div className="d-flex bd-highlight">
      <div className="p-2 flex-fill bd-highlight">
        <Menu agregar={agregarProductoAlPedido} />
      </div>
      <div className="p-2 flex-fill bd-highlight">
        <Order agregar={agregarProductoAlPedido} />
      </div>
    </div>
  );
}

export default WaiterView;
