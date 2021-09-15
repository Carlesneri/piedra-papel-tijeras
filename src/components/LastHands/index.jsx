import { IonBadge, IonItem, IonList } from "@ionic/react"
import './styles.css'

export default ({hands}) => {
  console.log({hands})
  return (
    <IonList className="hand-list">
      {
        hands.map((hand, index) => 
          <IonBadge key={index} className="hand-item">
            {hand.charAt(0).toUpperCase()}
          </IonBadge>
        )
      }
    </IonList>
  )
}