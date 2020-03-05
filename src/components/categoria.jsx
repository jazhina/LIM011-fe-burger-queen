import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';

function Lista(ca) {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );
  return (
    <div>
      {error && (
        <strong>
          Error:
          {JSON.stringify(error)}
        </strong>
      )}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          {value.docs
            .filter((doc) => doc.data().categoria === ca)
            .map((doc) => (
              <ul>
                <li key={`c ${doc.id}`}>
                  Categoria:
                  {doc.data().categoria}
                </li>
                <li key={`m ${doc.id}`}>
                  Menu:
                  {doc.data().item}
                </li>
                <li key={`p ${doc.id}`}>
                  Precio:
                  {doc.data().precio}
                </li>
              </ul>
            ))}
        </span>
      )}
    </div>
  );
}

export default Lista;
