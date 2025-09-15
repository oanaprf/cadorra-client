import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const HAS_VISITED_CADORRA = 'hasVisitedCadorra';

const useIncreaseVisitCount = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBZGIClGos-VdCZMuo0vs4wncNciTwb9kI',
    authDomain: 'cadorra-b5304.firebaseapp.com',
    projectId: 'cadorra-b5304',
    storageBucket: 'cadorra-b5304.firebasestorage.app',
    messagingSenderId: '189816255664',
    appId: '1:189816255664:web:6e5e803e41b3cbd9e1b775',
    measurementId: 'G-WF1E92E0TW',
  };
  initializeApp(firebaseConfig);
  const functions = getFunctions();
  const callableIncreaseVisitCount = httpsCallable(functions, 'increaseVisitCount');

  useEffect(() => {
    const increaseVisitCount = async () => {
      if (!localStorage.getItem(HAS_VISITED_CADORRA)) {
        callableIncreaseVisitCount();
        localStorage.setItem(HAS_VISITED_CADORRA, 'true');
      }
    };
    increaseVisitCount();
  }, []);
};

export default useIncreaseVisitCount;
