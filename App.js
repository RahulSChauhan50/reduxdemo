import React from 'react';
import {Provider} from 'react-redux';

import store from './MyAssets/Redux/store';
import Screen from './MyAssets/Screens/screen'



const App= () => {
  return (
    <Provider store={store}>
    <Screen/>
    </Provider>
  );
};
  

export default App;
