import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

export default function useFetchDocument(document) {
	const collectionRef = collection(db, document);
	const [config, setConfig] = useState([]);

	useEffect(() => {
		const getUser = async () => {
			try {
				const data = await getDocs(collectionRef);

				const newData = data.docs.map((doc) => doc.data());

				setConfig(newData);
			} catch (error) {
				console.log(error);
			}
		};
		getUser();
	}, []);
	return { config };
}
