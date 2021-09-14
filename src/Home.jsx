import React from 'react'
import './home.css'
import Hand from './components/Hand/index.jsx'
import LastHands from './components/LastHands'
import { IonContent, IonFooter, IonHeader } from '@ionic/react'

export default React.FC = () => 
    <>
        <IonHeader>
            <h1>Home</h1>
        </IonHeader>
        <IonContent>
            <Hand />
        </IonContent>
        <IonFooter>
            <LastHands />
        </IonFooter>
    </>