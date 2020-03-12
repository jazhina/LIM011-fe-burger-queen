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
    console.log(arrOrder);
    setArrOrder(newobj);
  };
  return (
    <div>
      <Menu agregar={agregarProductoAlPedido} />
      <Order listaproductos={arrOrder} />
    </div>
  );
}
export default WaiterView;
