// import { useState } from 'react'
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Characters } from './Characters'
import { fetchCharacters } from './Characters/api'
import ICharacter from './Characters/character.interface'



function App() {
  // const [count, setCount] = useState(0)

  const [fetchedCharacters, setFetchedCharacters] = useState<ICharacter[]>([])

  const fetchedCharactersCallback = useCallback(async () => {
    const data: ICharacter[] = await fetchCharacters()

    setFetchedCharacters(data);
  }, []);

  useEffect(() => {
    fetchedCharactersCallback()
  }, [fetchedCharactersCallback])

  return (
    <>
      <h1>Hello World!</h1>
      <Characters
        characters={fetchedCharacters}
      />
    </>
  )
}

export default App
