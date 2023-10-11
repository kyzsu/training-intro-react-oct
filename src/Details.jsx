import { useContext, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"

import fetchPet from "./fetchPet"
import Carousel from "./Carousel"
import ErrorBoundary from "./ErrorBoundary"
import Modal from "./Modal"
import AdoptedPetContext from "./AdoptedPetContext"

const Details = () => {
  const navigate = useNavigate()
  const [, setAdoptedPet] = useContext(AdoptedPetContext)
  const [showModal, setShowModal] = useState(false)
  const { petId } = useParams()
  const results = useQuery(["details", petId], fetchPet)

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🔃</h2>
      </div>
    )
  }

  const pet = results.data.pets[0]

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Apakah kamu ingin mengadopsi {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet)
                    navigate("/")
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}
