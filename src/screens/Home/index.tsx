import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

function handleParticipantAdd() {
	console.log('Você clicou no botão de Adicionar!')
}

function handleParticipantRemove(name: string) {
	console.log(`Você clicou em remover o participante ${name}`)
}

export function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>

			<Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6B6B6B"
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<Participant
				name="Lucas"
				onRemove={() => {
					handleParticipantRemove('Lucas')
				}}
			/>
			<Participant
				name="Fernanda"
				onRemove={() => {
					handleParticipantRemove('Fernanda')
				}}
			/>
			<Participant
				name="Kadu"
				onRemove={() => {
					handleParticipantRemove('Kadu')
				}}
			/>
			<Participant
				name="Rodrigo"
				onRemove={() => {
					handleParticipantRemove('Rodrigo')
				}}
			/>
		</View>
	)
}
