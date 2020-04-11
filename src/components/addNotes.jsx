import React, { useState } from 'react';
import './OrderKitchen.css';
import firebase from 'firebase';
import DetailKitchen from './detailKitchen';
// import PropTypes from 'prop-types';

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
      <div className="container">
        <div className="row" />
        <div className="col-lg-4" />
        <div className="card">
          <div className="card-section border rounded p-3">
            <div className="card-header">
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
                {order
                  .map((element) => <DetailKitchen key={element.id} detail={element} />)}
              </li>
              <li>
                Fecha:
                {' '}
                {fecha}
              </li>
              <hr />
              <input type="checkbox" onChange={calculateTimeOrder} />
              <span> Listo </span>
              <span>
                <p>Tiempo de espera: </p>
                <p>{time}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddNotes;
