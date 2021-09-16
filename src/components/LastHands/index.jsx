import { IonBadge, IonButton, IonCardContent, IonHeader, IonList, IonModal } from "@ionic/react"
import { useState } from "react"
import getDBHands from "../database/getDBHands"
import './styles.css'

export default ({hands}) => {
  const [DBHands, setDBHands] = useState([])
  const [showModal, setShowModal] = useState(false)

  function handleClickCodeButton() {
    getDBHands()
    .then(({data}) => {
      setDBHands(data)
      data.length > 0 && setShowModal(true)
    })
    .catch(console.error)
  }

  const length = hands.length
  return (
    <div className="footer">
      <IonList className="hand-list">
        {
          hands.map((hand, index) => 
          <IonBadge key={index} className={index === length - 1 ? "hand-item  first-hand" : "hand-item"}>
              {hand.charAt(0).toUpperCase()}
            </IonBadge>
          )
        }
      </IonList>
        
      {hands.length > 0 &&
        <IonButton className="code-button" onClick={handleClickCodeButton}>
          <img src="/assets/icon/code.svg" alt="code icon" />
        </IonButton>
      }

      <IonModal isOpen={showModal} className="hands-modal">
        <IonHeader title="hands register" className="modal-header">
          <h3>
            Hands Register
          </h3>
        </IonHeader>
        <IonCardContent>
          {JSON.stringify(DBHands)}
        </IonCardContent>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
      </IonModal>
    </div>
  )
}