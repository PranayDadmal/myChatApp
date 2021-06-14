import { fBase } from 'service';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    fBase.firestore
      .collection('chatUsers')
      .where('userName', '==', 'Pranay')
      .get()
      .then(res => {
        const user = res.docs[0]?.data();
        console.log(user);
      });
  }, []);
  return (
    <>
      <h1>let's start pranay</h1>
    </>
  );
};
