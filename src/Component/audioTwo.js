import MicRecorder from "mic-recorder-to-mp3"
import {useEffect, useState, useRef} from "react"
import axios from "axios"
import './audioTwo.css'

const APIKey = process.env.REACT_APP_API_KEY


const assemblyAI = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: APIKey,
        "content-type": "application/json",
        "transfer-encoding": "chunked",
    },
})
export const AudioTwo = () => {


    const recorder = useRef(null)
    const audioPlayer = useRef(null)
    const [blobURL, setBlobUrl] = useState(null)
    const [audioFile, setAudioFile] = useState(null)
    const [isRecording, setIsRecording] = useState(null)
    const intervalRef = useRef(null);


    useEffect(() => {

        recorder.current = new MicRecorder({bitRate: 128})
    }, [])

    const startRecording = () => {
        setAudioFile(null)
        setIsRecording(true);
        intervalRef.current = setInterval(() => {
            setAudioFile(null);
        }, 1000);

        recorder.current.start().then(() => {
            setIsRecording(true)
        })
    }

    const stopRecording = () => {

        if (isRecording) {
            clearInterval(intervalRef.current);
            setIsRecording(false);

        }


        recorder.current
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const file = new File(buffer, "audio.mp3", {
                    type: blob.type,
                    lastModified: Date.now(),
                })
                const newBlobUrl = URL.createObjectURL(blob)
                setBlobUrl(newBlobUrl)

                setIsRecording(false)


            })
            .catch((e) => console.log(e))
    }

    const [uploadURL, setUploadURL] = useState("")
    const [transcriptID, setTranscriptID] = useState("")
    const [transcriptData, setTranscriptData] = useState("")
    const [transcript, setTranscript] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (audioFile) {
            assemblyAI
                .post("/upload", audioFile)
                .then((res) => setUploadURL(res.data.upload_url))
                .catch((err) => console.error(err))
        }
    }, [audioFile])


    const checkStatusHandler = async () => {
        setIsLoading(true)
        try {
            await assemblyAI.get(`/transcript/${transcriptID}`).then((res) => {
                setTranscriptData(res.data)
            })
        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (transcriptData.status !== "completed" && isLoading) {
                checkStatusHandler()
            } else {
                setIsLoading(false)
                setTranscript(transcriptData.text)

                clearInterval(interval)
            }
        }, 1000)
        return () => clearInterval(interval)
    })


    return (
        <div className={'containerAudio'}>

            <div><audio ref={audioPlayer} src={blobURL} controls='controls'/></div>
            <div>
                <button
                    className={'greenTwo'}
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}

                >
                    Record
                </button>
            </div>
                {/*  <button
                className='btn btn-warning'
                onClick={stopRecording}
                disabled={!isRecording}
            >
                Stop
            </button>*/}

        </div>
    );
};
