import React, { useState } from 'react';
import './OrderKitchen.css';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import DetailKitchen from './DetailKitchen';

function AddNotes({ objeto }) {
  const {
    cliente, fecha, order, ID,
  } = objeto;
  const [time, setTime] = useState('');

  const calculateSecondsToString = (seconds) => {
    let hour = Math.floor(seconds / 3600);
    hour = (hour < 10) ? `0${hour}` : hour;
    let minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? `0${minute}` : minute;
    let second = seconds % 60;
    second = (second < 10) ? `0${second}` : second;

    const timeSecond = `${hour}:${minute}:${second}`;
    return timeSecond;
  };

  const calculateTimeOrder = () => {
    const date = new Date().toString();
    const presentHour = new Date(date.substring(0, date.indexOf('GMT')));
    const pastHour = new Date(fecha);
    const restHour = presentHour.getTime() - pastHour.getTime();
    const calculateHour = restHour / 1000;
    const calculateSeconds = calculateSecondsToString(calculateHour);
    setTime(calculateSeconds);
    firebase.firestore().collection('orders').doc(ID).update({
      estado: 'Listo',
      tiempo_espera: calculateSeconds,
    });
  };

  return (
    <section>
      <div className="card waiter p-3 border border-dark readyCard">
        <div className="card-header border border-dark ">
          <p className="name-client">
            Cliente:
            {' '}
            {cliente}
          </p>

        </div>
        <div className="card-body">
          <li>
            Orden:
            {' '}
            {Object.keys(order)
              .map((element) => <DetailKitchen key={element.id} detail={order[element]} />)}
          </li>
          <li>
            Fecha:
            {' '}
            {fecha}
          </li>
          <hr className="hr" />
          <footer className="">
            <input type="checkbox" onChange={calculateTimeOrder} />
            <span> Listo </span>
            <span>
              <p>Tiempo de espera: </p>
              <p>{time}</p>
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}
AddNotes.propTypes = {
  objeto: PropTypes
    .shape({
      cliente: PropTypes.string.isRequired,
      fecha: PropTypes.number.isRequired,
      order: PropTypes.string.isRequired,
      ID: PropTypes.string.isRequired,
    }).isRequired,
};
export default AddNotes;
