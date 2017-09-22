import { createStore } from 'redux';
import reducer from 'reducers';

const addPromiseThunkSupport = (store) => {
  const dispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') return action.then(dispatch);
    else if (typeof action === 'function') return action(dispatch);
    return dispatch(action);
	  };
};


const storeData = createStore(reducer);


storeData.dispatch = addPromiseThunkSupport(storeData);


export default storeData;
