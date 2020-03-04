import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';

function Lista() {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );
  // const listItems = value.docs
  //   .filter((element) => element.categoria === categoria)
  //   .map((element) => (
  //     <ul>
  //       <li>
  //         Categoria:
  //         {element.categoria}
  //       </li>
  //       <li>
  //         Menu:
  //         {element.item}
  //       </li>
  //       <li>
  //         Precio:
  //         {element.precio}
  //       </li>
  //     </ul>
  //   ));
  // return listItems;
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
            .filter((doc) => doc.data().categoria === 'desayuno')
            .map((doc) => (
              <ul>
                <li key={`${doc.data().id}`}>
                  Categoria:
                  {doc.data().categoria}
                </li>
                <li key={`m${doc.data().id}`}>
                  Menu:
                  {doc.data().item}
                </li>
                <li key={`p${doc.data().id}`}>
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
