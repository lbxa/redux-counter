import { INCREMENT, DECREMENT, RESET, LOGIN, LOGOUT } from "./types";

const increment = () => {
    return { type: INCREMENT };
};

const decrement = () => {
    return { type: DECREMENT };
};

const reset = () => {
    return { type: RESET };
};

const login = () => {
    return { type: LOGIN };
};

const logout = () => {
    return { type: LOGOUT };
};

export { increment, decrement, reset, login, logout };
