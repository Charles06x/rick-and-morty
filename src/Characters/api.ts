import { get } from "../httpClient";
import ICharacter from "./character.interface";

const URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (): Promise<ICharacter[]> => {

	const { data } = await get(URL);

	return data;
}

