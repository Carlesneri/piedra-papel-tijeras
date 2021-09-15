import React from 'react'
import './home.css'
import Hand from './components/ToggleHand/index.jsx'
import { IonContent, IonHeader } from '@ionic/react'

export default React.FC = () => 
    <>
        <IonHeader class="header">
            <h1>Playcraft</h1>
        </IonHeader>
        <IonContent>
            <Hand />
        </IonContent>
        {/* <IonFooter>
        </IonFooter> */}
    </>