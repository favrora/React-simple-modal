import { useMemo } from "react";
import { types } from "mobx-state-tree";

export const RootStore = types
  .model({
    firstName: types.string,
    lastName: types.string,
  })
  .actions((store) => ({
    setFirstName(value) {
      store.firstName = value;
    },
    setLastName(value) {
      store.lastName = value;
    },
  }))
  .views((store) => ({
    get fullName() {
      return `${store.firstName} ${store.lastName}`;
    },
  }));

let _store;
export const useStore = () => {
  const store = useMemo(() => {
    if (!_store) _store = RootStore.create({ firstName: "", lastName: "" });
    return _store;
  }, []);
  return store;
};
