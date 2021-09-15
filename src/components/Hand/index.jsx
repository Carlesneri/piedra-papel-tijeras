import { IonButton } from '@ionic/react'
import { useState } from 'react'
import HandSelector from '../HandSelector'

export default () => {

  const [isPlaying, setIsPlaying] = useState(false)

  function handleClickStartButton() {
    setIsPlaying(!isPlaying)
  }

  return(
  <>
  {
    isPlaying === false ? 
      <IonButton color="dark" onClick={handleClickStartButton}>Start</IonButton>
    : 
      <>
        <IonButton color="warning" onClick={handleClickStartButton}>Stop</IonButton>
        <HandSelector />
      </>
  }
  </>
  )
}