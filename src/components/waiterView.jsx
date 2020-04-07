import React, { useState } from 'react';
import Menu from './menu';
import Order from './order';
import Title from './title';

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

  const orderReset = () => {
    setArrOrder([]);
  };

  function Delete(data) {
    const newArrayDel = [...arrOrder];
    const position = arrOrder.findIndex((element) => element.id === data.id);
    console.log(position);
    const arrayProducts = newArrayDel.splice(position, 1);
    console.log(arrayProducts);
    setArrOrder(newArrayDel);
  }
  // eslint-disable-next-line no-unused-vars
  const reset = () => {
    setArrOrder([]);
    setArrTotal(0);
  };
  const agregarProductoAlPedido = (obj, operacion) => {
    const newobj = {
      producto: obj.descripcion,
      precio: obj.precio,
      cantidad: 1,
      id: obj.id,
    };
    const filterProducts = arrOrder.filter((element) => element.id === newobj.id);
    const newArray = arrOrder.concat([newobj]);
    const mapProducts = arrOrder.map((element) => {
      const elementCantidad = element;
      if (element.id === newobj.id) {
        if (element.cantidad >= 1) {
          if (operacion === false) {
            elementCantidad.cantidad -= 1;
          }
        }
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
    <main>
      <Title />
      <div className="d-flex bd-highlight" data-testid="containerWaiterView">
        <div className="p-2 flex-fill bd-highlight">
          <Menu agregar={agregarProductoAlPedido} total={buttonTotal} />
        </div>
        <div className="p-2 flex-fill bd-highlight">
          <Order data={arrOrder} addOperation={agregarProductoAlPedido} total={buttonTotal} eliminar={Delete} newtotal={arrtotal} reset={orderReset} />
        </div>
      </div>
    </main>
  );
}

export default WaiterView;
