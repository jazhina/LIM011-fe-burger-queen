import React, { useState } from 'react';
import Menu from './menu';
import Order from './order';

function WaiterView() {
  const [arrOrder, setArrOrder] = useState([]);

  const agregarProductoAlPedido = (obj, operacion) => {
    const newobj = {
      producto: obj.descripcion,
      precio: obj.precio,
      id: obj.id,
      cantidad: 1,
    };
    const filterProducts = arrOrder.filter((element) => element.id === newobj.id);
    const newArray = arrOrder.concat([newobj]);
    const mapProducts = arrOrder.map((element) => {
      let elementCantidad = element;
      if (element.id === newobj.id) {
        if (operacion === true) {
          elementCantidad.cantidad += 1;
        } else if (operacion === false) {
          elementCantidad.cantidad -= 1;
        } else if (operacion === 'delete') {
          elementCantidad = arrOrder.splice(arrOrder, 0);
          // console.log(arrOrder.splice(arrOrder, 0));
        }
      }

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
        <Order agregar={arrOrder} addOperation={agregarProductoAlPedido} />
      </div>
    </div>
  );
}

export default WaiterView;
