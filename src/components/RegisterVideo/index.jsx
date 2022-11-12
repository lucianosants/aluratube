import { useState } from 'react';

import { collection, addDoc, Timestamp } from 'firebase/firestore';

import useForm from '../../hooks/useForm';
import { StyledRegisterVideo } from './styles';
import { db } from '../../firebase/config';

export default function RegisterVideo() {
	const [formVisible, setFormVisible] = useState(false);
	const [docCollection, setDocCollection] = useState('games');

	const getThumbnail = (url) => {
		return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
	};

	const registerForm = useForm({
		initialValues: {
			title: '',
			url: '',
			thumb: '',
			createdAt: () => {},
		},
	});

	const createNewVideo = async (docCollection) => {
		try {
			const newVideo = {
				title: registerForm.values.title,
				url: registerForm.values.url,
				thumb: getThumbnail(registerForm.values.url),
				createdAt: Timestamp.now(),
			};

			const insertVideo = await addDoc(
				collection(db, docCollection),
				newVideo
			);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!docCollection) {
			alert('Dados incorretos');
		}

		if (docCollection === 'games') {
			createNewVideo(docCollection);
		}

		if (docCollection === 'frontend') {
			createNewVideo(docCollection);
		}

		if (docCollection === 'backend') {
			createNewVideo(docCollection);
		}
		registerForm.clearForm();

		setFormVisible(false);
	};

	return (
		<StyledRegisterVideo>
			<button
				type='button'
				className='add__video'
				onClick={() => setFormVisible(true)}
			>
				+
			</button>

			{formVisible && (
				<form onSubmit={handleSubmit}>
					<div>
						<button
							type='button'
							className='close__modal'
							onClick={() => setFormVisible(false)}
						>
							X
						</button>

						<input
							type='text'
							required
							placeholder='Título do vídeo'
							value={registerForm.values.title}
							name='title'
							onChange={registerForm.handleChange}
						/>
						<input
							type='text'
							required
							placeholder='URL'
							name='url'
							value={registerForm.values.url}
							onChange={registerForm.handleChange}
						/>
						<div className='input__check--container'>
							<label>
								<input
									type='checkbox'
									className='input__check'
									value={docCollection}
									onChange={() => setDocCollection('games')}
								/>
								<span>Games</span>
							</label>

							<label>
								<input
									type='checkbox'
									className='input__check'
									value={docCollection}
									onChange={() =>
										setDocCollection('frontend')
									}
								/>
								<span>Front-End</span>
							</label>

							<label>
								<input
									type='checkbox'
									value={docCollection}
									className='input__check'
									onChange={() => setDocCollection('backend')}
								/>
								<span>Back-End</span>
							</label>
						</div>
						<button type='submit'>Cadastrar</button>
					</div>
				</form>
			)}
		</StyledRegisterVideo>
	);
}
