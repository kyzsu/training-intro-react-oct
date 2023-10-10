import { useParams } from "react-router-dom"

const Details = () => {
  const { petId } = useParams()
  return <h2>Hi! I am a pet with Id: {petId}</h2>
}

export default Details
