
import {createReducer} from '@reduxjs/toolkit'
import {addContact, removeContact,filterContact} from './actions';

const contactsList = {
    contacts:[ 
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },]}
    
const filteredContacts = {
  filter:'',
    }

export const clicksReducer = createReducer(contactsList,{
      [addContact]:(state,action)=>{
        state.contacts=[...state.contacts,action.payload]},
  
      [removeContact]:(state,action)=>{
        const filtered=state.contacts.filter(contact=>contact.id!==action.payload);
        state.contacts= filtered;
  }
  });
  
export const filterReducer = createReducer(filteredContacts,{
      [filterContact]:(state,action)=>{
        state.filter=action.payload;
      console.log(action.payload)
  }
    });

    // const persistConfig = {
    //     key: 'contacts',
    //     storage,
    //     blacklist: ['filterReducer'],
    //   };

    //   const rootReducer = combineReducers({
    //     clicksReducer,
    //     filterReducer,
    //   });
    //   export const persistedReducer = persistReducer(persistConfig,rootReducer);