import { GenericResponse, VoiceRecorder } from "capacitor-voice-recorder";
import { useEffect, useState } from "react";

const useMicrophone = () => {
 const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
 const [refresh, setRefresh] = useState(false);

 const refreshPermission = () => {
  setRefresh(!refresh)
 }

 const getPermission = async () => {
  try {
   const canRecord =
    (await VoiceRecorder.canDeviceVoiceRecord()) as GenericResponse;
   if (canRecord.value) {
    const getThePermission =
     (await VoiceRecorder.requestAudioRecordingPermission()) as GenericResponse;
    if (getThePermission.value) {
     setHasMicrophonePermission(true);
    }
   }
  } catch (e) {
   console.log(e)
  }
 }

 useEffect(() => {
  getPermission()
 }, [refresh])

 return { hasMicrophonePermission, refreshPermission }
}

export default useMicrophone;
