import { IonBadge, IonItem, IonList } from "@ionic/react"
import './styles.css'

export default ({hands}) => {
  const length = hands.length
  return (
    <IonList className="hand-list">
      {
        hands.map((hand, index) => 
          <IonBadge key={index} className={index === length - 1 ? "hand-item  first-hand" : "hand-item"}>
            {hand.charAt(0).toUpperCase()}
          </IonBadge>
        )
      }
    </IonList>
  )
}