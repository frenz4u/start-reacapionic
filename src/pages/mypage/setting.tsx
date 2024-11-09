import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { Abatar } from "../../components/Abatar";

const SettingPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1>Setting</h1>
                <Abatar />
            </IonContent>
        </IonPage>
    );
}

export default SettingPage;