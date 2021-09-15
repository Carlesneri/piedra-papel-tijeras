import { IonCard, IonCardContent, IonCardHeader, IonCol } from "@ionic/react"
import { useEffect, useState } from "react"
import './styles.css'
import getRandomImage from '../../helpers/getRandomImage'
import getHandResult from '../../helpers/getHandResult'

const getImageSrc = image =>  `/assets/images/${image}.png`

const handResultText = {
  'win': 'You win',
  'draw': 'Draw',
  'lose': 'You lose'
}
const handResultColor = {
  'win': 'success',
  'draw': 'warning',
  'lose': 'danger'
}

export default ({lastUserChoice, setIsPlaying, setLastTenHands}) => {
  const [computerImage, setComputerImage] = useState(null)
  const [handResult, setHandResult] = useState(null)

  const randomImage = getRandomImage()

  useEffect(() => {
    setHandResult(null)
    setComputerImage(null)

    if(lastUserChoice) {
  
      setTimeout(() => {
        setComputerImage(randomImage)
        const handResult = getHandResult({user: lastUserChoice, computer: randomImage})
        setHandResult(handResult)
        setIsPlaying(false)
        setLastTenHands(lastHands => lastHands.concat(handResult))
      }, 750)
    }
  }, [lastUserChoice])

  return (
    <IonCol className='card-group'>
      <IonCardContent className="card-selected">
        {lastUserChoice &&
          <>
            <IonCardHeader className="card-header">Your choice</IonCardHeader>
            <img src={getImageSrc(lastUserChoice)} alt={lastUserChoice} />
          </>
        }
      </IonCardContent>
      <IonCardContent className="card-selected">
        {computerImage && lastUserChoice && 
          <>
            <IonCardHeader className="card-header">Computer</IonCardHeader>
            <img src={getImageSrc(computerImage)} alt={computerImage} />
          </>
        }    
      </IonCardContent>
      {
        handResult && 
        <IonCard  color={handResultColor[handResult]} className="card-result">
          {handResultText[handResult]}
        </IonCard>
      }
    </IonCol>
  )
}