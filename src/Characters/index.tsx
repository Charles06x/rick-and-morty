import ICharacter from "./character.interface"
import SingleCharacter from "./SingleCharacter"

interface ICharacterProps {
	characters: ICharacter[]
}

export const Characters = ({ characters }: ICharacterProps) => {
	return (
		<div>
			<h2>Rick and Morty Characters</h2>

			{
				characters.map(({name, status, species}) => {
					return (
						<SingleCharacter
							name={name}
							status={status}
							species={species}
						/>
					)
				})
			}
		</div>
	)
}