import { IonButton } from '@ionic/react'
import { useState } from 'react'
import HandSelector from '../HandSelector'

export default () => {

  const [isPlaying, setIsPlaying] = useState(true)

  function handleClickStartButton() {
    setIsPlaying(true)
  }

  return(
  <>
  {isPlaying === false? 
    <IonButton color="light" onClick={handleClickStartButton}>Start</IonButton>
    : 
    <HandSelector />
  }
  </>
  )
}