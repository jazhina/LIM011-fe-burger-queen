import React, { useState } from 'react';
import Menu from './menu';
import Order from './order';

function WaiterView() {
  const [arrOrder, setArrOrder] = useState([]);
  const [arrtotal, setArrTotal] = useState(0);
  const buttonTotal = () => {
    let total = 0;
    arrOrder.forEach((element) => {
      const price = element.precio;
      const quantity = element.cantidad;
      total += (price * quantity);
      setArrTotal(total);
    });
    return (total);
  };

  function Delete(data) {
    const newArrayDel = [...arrOrder];
    const position = arrOrder.findIndex((element) => element.id === data.id);
    console.log(position);
    const arrayProducts = newArrayDel.splice(position, 1);
    console.log(arrayProducts);
    setArrOrder(newArrayDel);
  }
  const reset = () => {
    setArrOrder([]);
    setArrTotal(0);
  };
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
      const elementCantidad = element;
      if (element.id === newobj.id) {
        if (operacion === true) {
          elementCantidad.cantidad += 1;
        } else if (element.cantidad >= 2) {
          if (operacion === false) {
            elementCantidad.cantidad -= 1;
          }
        }
      }
      return elementCantidad;
    });

    if (filterProducts.length === 0) {
      setArrOrder(newArray);
    } else {
      setArrOrder(mapProducts);
    }
  };
  return (
    <div className="d-flex bd-highlight" data-testid="containerWaiterView">
      <div className="p-2 flex-fill bd-highlight">
        <Menu agregar={agregarProductoAlPedido} total={buttonTotal} />
      </div>
      <div className="p-2 flex-fill bd-highlight">
        <Order data={arrOrder} addOperation={agregarProductoAlPedido} total={buttonTotal} eliminar={Delete} newtotal={arrtotal} reset={reset} />
      </div>
    </div>
  );
}

export default WaiterView;
