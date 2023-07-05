import { useEffect, useState } from "react";
import { SpeechRecognition, } from "@ionic-native/speech-recognition";

const useSpeechToTextPermission = () => {
 const [hasSpeechPermission, setHasSpeechPermission] = useState(false);
 const [refresh, setRefresh] = useState(false);

 const refreshPermission = () => {
  setRefresh(!refresh)
 }

 const getPermission = async () => {
  try {
   const isRecognitionAvailable = await SpeechRecognition.isRecognitionAvailable() as boolean;
   if (isRecognitionAvailable) {
    const hasPermission = await SpeechRecognition.hasPermission() as boolean;
    if (hasPermission) {
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
