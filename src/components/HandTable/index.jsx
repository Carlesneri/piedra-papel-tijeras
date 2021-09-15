import { IonCard, IonCardContent, IonCardHeader, IonCol, IonSpinner } from "@ionic/react"
import { useEffect, useState } from "react"
import './styles.css'
import getRandomImage from '../../helpers/getRandomImage'
import getHandResult from '../../helpers/getHandResult'

const getImageSrc = image =>  `/assets/images/${image}.png`
const getRandomTime = () => 1000 + Math.random() * 1000 

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
  const [loadingComputerHand, setLoadingComputerHand] = useState(false)

  const randomImage = getRandomImage()

  useEffect(() => {
    setHandResult(null)
    setComputerImage(null)
    setLoadingComputerHand(false)
    
    if(lastUserChoice) {
      setLoadingComputerHand(true)
  
      setTimeout(() => {
        setComputerImage(randomImage)
        setLoadingComputerHand(false)
        const handResult = getHandResult({user: lastUserChoice, computer: randomImage})
        setHandResult(handResult)
        setIsPlaying(false)
        setLastTenHands(lastHands => lastHands.concat(handResult))
      }, getRandomTime())
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
        {
          lastUserChoice && 
          <>
          {
            loadingComputerHand ?
              <IonSpinner className="dots-spinner" name='dots' />
            :
              <>
              <IonCardHeader className="card-header">Computer</IonCardHeader>
              <img src={getImageSrc(computerImage)} alt={computerImage} />
              </>
          }
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