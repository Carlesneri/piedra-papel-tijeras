import { IonButton, IonCardContent } from '@ionic/react'
import { useState } from 'react'
import startNewDB from '../database/startNewDB'
import Hand from '../Hand'
import './styles.css'

export default () => {

  const [isPlaying, setIsPlaying] = useState(false)

  function handleClickStartButton() {
    startNewDB()
    .then(() => {
      setIsPlaying(!isPlaying)
    })
    .catch(console.error)
  }

  return(
  <>
    {
      isPlaying === false ? 
        <div className="button-container start-button">
              <IonButton color="light" onClick={handleClickStartButton}>
                Start
              </IonButton>
              <IonCardContent>
                <h2>
                  Press button to start! 🏆
                </h2>
              </IonCardContent>
        </div>
      : 
        <>
          <div className="button-container">
            <IonButton color="dark" onClick={handleClickStartButton}>Stop</IonButton>
          </div>
            <Hand />
        </>
    }
  </>
  )
}