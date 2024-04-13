
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDZuJRpI393QEkfh7E7GYYFnVXhZVyLkRo",
    authDomain: "crudd-d72fb.firebaseapp.com",
    projectId: "crudd-d72fb",
    storageBucket: "crudd-d72fb.appspot.com",
    messagingSenderId: "215170470963",
    appId: "1:215170470963:web:2980b310df56236bb2ff46"
};                          

// firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
           
 * @param {string} title           
 * @param {string} description 
 */
export const saveTask = (title, description) =>                         //Agrega una nueva tarea a la colección "tasks" en Firestore.
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>                                 //esta función se encarga de agregar los datos como un nuevo documento en la colección "tasks" de la base de datos Firestore.
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));     //Elimina una tarea de la colección "tasks" basada en su ID.

export const getTask = (id) => getDoc(doc(db, "tasks", id));          //Obtiene una tarea específica de la colección "tasks" basada en su ID.

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);                         //Actualiza una tarea existente en la colección "tasks" con nuevos campos.

export const getTasks = () => getDocs(collection(db, "tasks"));       //Obtiene todas las tareas de la colección "tasks".