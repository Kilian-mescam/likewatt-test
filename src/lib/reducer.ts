import { Data } from "./entities";

type Action =
  | { type: 'ADD_DATA'; payload: Data }
  | { type: 'DELETE_DATA'; payload: string }; // payload is the id of the data to delete


export function reducer(state: Data[], action: Action): Data[] {
    switch (action.type) {
      case 'ADD_DATA':
        return [...state, action.payload]; // Ajoute l'utilisateur
      case 'DELETE_DATA':
        return state.filter(user => user.id !== action.payload); // Supprime l'utilisateur
      default:
        return state;
    }
  }