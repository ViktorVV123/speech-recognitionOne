import {useEffect, useState, MouseEvent, useRef} from "react";

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "ru-RU"
}
const UseScpeechRecognitionTwo = () => {
    const [textTwo, setTextTwo] = useState('')
    const [isListeningTwo, setIsListeningTwo] = useState(false)
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            console.log('onresult event:', event)
            setTextTwo(event.results[0][0].transcript)
            recognition.stop();
            setIsListeningTwo(false)

        }
    }, [])
    const startListeningTwo = () => {
        setTextTwo('')
        setIsListeningTwo(true)
        // @ts-ignore
        intervalRef.current = setInterval(() => {

        }, 1000);
        recognition.start();

    }
    const stopListeningTwo = () => {
        if(isListeningTwo){
            setIsListeningTwo(false)
            recognition.stop()
        }
    }
    return{
        textTwo,
        isListeningTwo,
        startListeningTwo,
        stopListeningTwo,
        hasRecognitionSupport: !!recognition,
    }
};

export default UseScpeechRecognitionTwo;
