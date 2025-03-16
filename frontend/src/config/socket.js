import socket from 'socket.io-client';

let socketInstance = null; // represents connection btw server and client

export const initializeSocket = (projectId) => {
console.log("socket initialized")

    socketInstance = socket(import.meta.env.VITE_API_URL, {
        auth: {
            token: localStorage.getItem('token')
        },
        query: {
            projectId
        }
    });
    console.log(socketInstance)
    return socketInstance;
    
}

export const receiveMessage = (eventName, cb) => {
    socketInstance.on(eventName, cb);
}

export const sendMessage = (eventName, data) => {
    socketInstance.emit(eventName, data);
}