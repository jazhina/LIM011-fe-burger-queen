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
  function prueba() {
    return arrOrder
      .map((element) => <Order listaproductos={element} />);
  }
  return (
    <div>
      <Menu agregar={agregarProductoAlPedido} PrintListProducts={prueba} />
      <Order PrintListProducts={prueba} />
    </div>
  );
}
export default WaiterView;
