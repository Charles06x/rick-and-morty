import axios from "axios"

interface IResponse {
	data: any
}

export const get = async (url: string): Promise<IResponse> => {
	const { data: { results } } = await axios.get(url);

	return { data: results}
}