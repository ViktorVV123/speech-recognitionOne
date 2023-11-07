/*

import MicRecorder from "mic-recorder-to-mp3"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
const APIKey:any = process.env.REACT_APP_API_KEY


const assemblyAI = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: APIKey,
        "content-type": "application/json",
        "transfer-encoding": "chunked",
    },
})
export  const Audio1 = () => {

    const recorder = useRef(null)
    const audioPlayer = useRef(null)
    const [blobURL, setBlobUrl] = useState(null)
    const [audioFile, setAudioFile] = useState(null)
    const [isRecording, setIsRecording] = useState(null)

    useEffect(() => {

        recorder.current = new MicRecorder({ bitRate: 128 })
    }, [])

    const startRecording = () => {


        // @ts-ignore
        recorder.current.start().then(():any => {
            setIsRecording(true)
        })
    }

    const stopRecording = () => {

        recorder.current
            .stop()
            .getMp3()
            .then(([buffer, blob]):any => {
                const file = new File(buffer, "audio.mp3", {
                    type: blob.type,
                    lastModified: Date.now(),
                })
                const newBlobUrl:any = URL.createObjectURL(blob)
                setBlobUrl(newBlobUrl)
                // @ts-ignore
                setIsRecording(false)
                // @ts-ignore
                setAudioFile(file)
            })
            .catch((e: any) => console.log(e))
    }

    // AssemblyAI

    // States
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
*/





  /*  const checkStatusHandler = async () => {
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
        const interval = setInterval(():any => {
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
        <div>
            <audio ref={audioPlayer} src={blobURL} controls='controls' />
            <button
                className='btn btn-primary'
                onClick={startRecording}
                disabled={isRecording}
            >
                Record
            </button>
            <button
                className='btn btn-warning'
                onClick={stopRecording}
                disabled={!isRecording}
            >
                Stop
            </button>
        </div>
    );
};*/

import React from 'react';

const Audio1 = () => {
    return (
        <div>

        </div>
    );
};

export default Audio1;
