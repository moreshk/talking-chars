import { useEffect, useState } from "react";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";

const useSpeechToTextPermission = () => {
 const [hasSpeechPermission, setHasSpeechPermission] = useState(false);
 const [refresh, setRefresh] = useState(false);

 const refreshPermission = () => {
  setRefresh(!refresh)
 }

 const getPermission = async () => {
  try {
   const { available } = await SpeechRecognition.available();

   if (available) {
    const { speechRecognition } = await SpeechRecognition.requestPermissions();
    if (speechRecognition === 'granted') {
     setHasSpeechPermission(true);
    }
   }
  } catch (e) {
   console.log(e)
  }
 }

 useEffect(() => {
  getPermission()
 }, [refresh])

 return { hasSpeechPermission, refreshPermission }
}

export default useSpeechToTextPermission;
