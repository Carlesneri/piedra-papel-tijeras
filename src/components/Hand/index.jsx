import { IonButton } from '@ionic/react'
import { useState } from 'react'
import HandSelector from '../HandSelector'
import './styles.css'

export default () => {

  const [isPlaying, setIsPlaying] = useState(false)

  function handleClickStartButton() {
    setIsPlaying(!isPlaying)
  }

  return(
  <>
    {
      isPlaying === false ? 
        <div className="button-container">
              <IonButton color="dark" onClick={handleClickStartButton}>Start</IonButton>
        </div>
      : 
        <>
          <div className="button-container">
            <IonButton color="warning" onClick={handleClickStartButton}>Stop</IonButton>
          </div>
            <HandSelector />
        </>
    }
  </>
  )
}