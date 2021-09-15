import { IonButtons } from "@ionic/react";
import {useState, useEffect} from "react"
import './styles.css'
import HandTable from '../HandTable'
import LastHands from "../LastHands"

export default () => {

  const [lastTenHands, setLastTenHands] = useState([])
  const [lastUserChoice, setLastUserChoice] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if(lastTenHands.length === 10) {
      console.log(lastTenHands)
      const newLastHands = lastTenHands.slice(1)
      setLastTenHands(newLastHands)
    }
  }, [lastTenHands])

  function handleClickHandButton(selection) {
    setIsPlaying(true)
    setLastUserChoice(null)
    setTimeout(() => setLastUserChoice(selection), 1)
  }

  return (
    <>
      <IonButtons className="buttons-container">
        <button className={isPlaying ? 'disabled hand-selector-button' : 'hand-selector-button'} onClick={() => handleClickHandButton('stone')}>
          <img src="/assets/images/stone.png" alt="stone" />
        </button>
        <button className={isPlaying ? 'disabled hand-selector-button' : 'hand-selector-button'} onClick={() => handleClickHandButton('paper')}>
        <img src="/assets/images/paper.png" alt="stone" />
        </button>
        <button className={isPlaying ? 'disabled hand-selector-button' : 'hand-selector-button'} onClick={() => handleClickHandButton('scissors')}>
        <img src="/assets/images/scissors.png" alt="stone" />
        </button>
      </IonButtons>
      <HandTable lastUserChoice={lastUserChoice} setIsPlaying={setIsPlaying} setLastTenHands={setLastTenHands} />
      <LastHands hands={lastTenHands}></LastHands>
    </>
  )
}