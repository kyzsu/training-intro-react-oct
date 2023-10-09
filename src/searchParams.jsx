import { useEffect, useState } from "react"
import Pet from "./Pet"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const [pets, setPets] = useState([])
  const breeds = []

  useEffect(() => {
    requestPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await res.json()

    setPets(json.pets)
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => {
              console.log("ini adalah input yang diketik: ", e.target.value)
              setLocation(e.target.value)
            }}
          />
          {/* controlled form */}
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed("")
            }}
            onBlur={(e) => {
              setAnimal(e.target.value)
              setBreed("")
            }}
          >
            <option>-- Silahkan Pilih Hewan --</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds?.length}
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value)
            }}
            onBlur={(e) => {
              setBreed(e.target.value)
            }}
          >
            <option>-- Silahkan Pilih Hewan --</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  )
}

export default SearchParams
