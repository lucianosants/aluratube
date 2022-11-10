import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { StyledRegisterVideo } from './styles';

export default function RegisterVideo() {
	const [formVisible, setFormVisible] = useState(false);

	const registerForm = useForm({
		initialValues: {
			title: '',
			url: '',
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(registerForm.values);

		registerForm.clearForm();

		alert('Vídeo cadastrado com sucesso!');

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
							placeholder='Título do vídeo'
							value={registerForm.values.title}
							name='title'
							onChange={registerForm.handleChange}
						/>
						<input
							type='text'
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
