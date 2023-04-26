import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../features/UserSlice";
import tokenReducer from "../features/TokenSlice";
import playlistReducer from "../features/PlaylistSlice";

const rootReducer = {
    //los reducers son las funciones que escuchan las acciones
        user : userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store

