import React, { useState } from 'react';
import Menu from './menu';
import Order from './order';

function WaiterView() {
  const [arrOrder, setArrOrder] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  const agregarProductoAlPedido = (obj) => {
    const newobj = {
      producto: obj.descripcion,
      precio: obj.precio,
      id: obj.id,
      cantidad,
    };
    const saveId = obj.id;
    const newArray = arrOrder.concat([newobj]);
    newArray.map((element) => element.id === saveId);
    setArrOrder(newArray);
    setCantidad(cantidad + 1);
    /* const add = () => {
      const nuevoValor = cantidad + 1;
      setCantidad(nuevoValor);
    }; */
    /* const nuevoValors = arrOrder.map((products2) => products2.cantidad + 1);
    setCantidad(nuevoValors);
    */
    /* const find = newArray.map((element) => element.id === saveId);
    setArrOrder(find);
    console.log(find); */
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
