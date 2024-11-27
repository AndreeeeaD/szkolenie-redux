import { Action, Reducer, StoreCreator } from 'redux';
import { RootState } from './store';

type StoreEnhancer = (currentStoreCreator: StoreCreator) => StoreCreator

export const sayHiOnDispatchEnhancer: StoreEnhancer = (createStore) => (
  reducer: Reducer<RootState, Action>,
  enhancer?: StoreEnhancer
) => {
  const store = createStore(reducer, enhancer);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    console.log("hi");
    return originalDispatch(action);
  };

  return store;
}

export const enhancers = [sayHiOnDispatchEnhancer];
