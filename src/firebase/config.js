import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDOXSTk7AcSexzB_Blq6LcWxh60WtAwKNs',
	authDomain: 'aluratube-375b2.firebaseapp.com',
	databaseURL: 'https://aluratube-375b2-default-rtdb.firebaseio.com',
	projectId: 'aluratube-375b2',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
