import ICharacter from "./character.interface";

const SingleCharacter = ({name, status, species}: ICharacter) => {
	return (
		<div style={{
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: 'blueviolet',
			borderRadius: '10%',
			textAlign: 'left',
			padding: '1.5em',
			margin: '1em'
		}}>
			<h4>{name}</h4>
			<p style={{}}>Status: {status} Species: {species}</p>
		</div>
	)
}

export default SingleCharacter;