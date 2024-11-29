import authReducer from "./slices/auth"
import formReducer from "./slices/forms" 

import storage from "redux-persist/lib/storage"   // Use localStorage
import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"


const authPersistConfig={
    key:"auth",
    storage,
    whitelist:["isAuthentication","user"],    // Persist authentication state and user info
};

const formPersistConfig={
    key:"form",
    storage,
    whitelist:["form1","form2","form3","form4","currentForm"], // Persist all forms
};

const rootReducer=combineReducers({
    auth:persistReducer(authPersistConfig,authReducer),
    forms:persistReducer(formPersistConfig,formReducer),
});

export default rootReducer;