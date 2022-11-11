import { useState } from 'react';

import { createClient } from '@supabase/supabase-js';

import useForm from '../../hooks/useForm';
import { StyledRegisterVideo } from './styles';

const PROJECT_URL = 'https://xaodgcrzqsxpckwgluqm.supabase.co';
const PUBLIC_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhb2RnY3J6cXN4cGNrd2dsdXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjU2MTksImV4cCI6MTk4Mzc0MTYxOX0.BdEtxd92pxWJ77KRo3VoaIla8ywN3vxyTUoRDPewS2M';

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function RegisterVideo() {
	const [formVisible, setFormVisible] = useState(false);

	const getThumbnail = (url) => {
		return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
	};

	const registerForm = useForm({
		initialValues: {
			title: '',
			url: '',
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		supabase
			.from('videos')
			.insert({
				title: registerForm.values.title,
				url: registerForm.values.url,
				thumb: getThumbnail(registerForm.values.url),
				playlist: 'jogos',
			})
			.then(() => {
				registerForm.clearForm();

				alert('Vídeo cadastrado com sucesso!');
			})
			.catch((err) => {
				console.log(err);
			});

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
						<button type='submit'>Cadastrar</button>
					</div>
				</form>
			)}
		</StyledRegisterVideo>
	);
}
