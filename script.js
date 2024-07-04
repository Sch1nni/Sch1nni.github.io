// Importa Firebase SDK
import firebase from "firebase/app";
import "firebase/firestore";

// Configura Firebase utilizzando le variabili d'ambiente
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Inizializza Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Funzione per ottenere le storie da Firestore
async function getStories() {
    const stories = [];
    try {
        const querySnapshot = await db.collection("stories").get();
        querySnapshot.forEach((doc) => {
            stories.push({
                id: doc.id,
                author: doc.data().author,
                content: doc.data().content
            });
        });
    } catch (error) {
        console.error("Error retrieving stories:", error);
    }
    return stories;
}

// Funzione per mostrare la pagina
function showPage(stories, index) {
    const contentDiv = document.getElementById('content');
    contentDiv.style.opacity = 0; // Effetto di dissolvenza in uscita
    setTimeout(() => {
        contentDiv.textContent = stories[index].content; // Mostra il contenuto della storia
        contentDiv.style.opacity = 1; // Effetto di dissolvenza in entrata
    }, 1000);
}

// Funzione principale per gestire il ciclo delle pagine
async function cyclePages() {
    const stories = await getStories();
    let index = 0;
    showPage(stories, index);
    setInterval(() => {
        index = (index + 1) % stories.length;
        showPage(stories, index);
    }, 10000);
}

// Avvia il ciclo delle pagine quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    cyclePages();
});
