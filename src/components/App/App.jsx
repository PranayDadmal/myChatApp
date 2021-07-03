import { Route, Switch } from 'react-router-dom';
import { Chat, Signup, Login } from 'components';

export const App = () => {
  
  return(
      <div className="app">
        <Switch >
        <Chat exact path="/" component={Chat} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        </Switch>
      </div>
  );
};

// import { fBase } from 'service';
// import { useEffect } from 'react';
// useEffect(() => {
  //   fBase.firestore
  //     .collection('chatUsers')
  //     .where('userName', '==', 'Pranay')
  //     .get()
  //     .then(res => {
  //       const user = res.docs[0]?.data();
  //       console.log(user);
  //     });
  // }, []);
  // return (
  //   <>
  //     <h1>let's start pranay</h1>
  //   </>
  // );