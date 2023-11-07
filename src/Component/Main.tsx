import React, {MouseEvent} from 'react';
import useSpeechRecognition from '../hook/UseScpeechRecordingHook'
import './main.css'

export const Main = () => {
    const {text, startListening, stopListening, isListening, hasRecognitionSupport} = useSpeechRecognition();


    return (
        <div className={'containerMain'}>
            
            <div className={'containerButton'}>
                {hasRecognitionSupport ? (
                    <div className={'containerButton2'}>
                        <div className={'containerButton3'}>
                            <div>
                                <button className={'green'} onClick={startListening}>start</button>
                            </div>
                            <div>
                                <button className={'green'} onClick={stopListening}>stop</button>
                            </div>
                        </div>
                        <div className={'containerText'}>
                            {isListening ?
                                <div className={'styleTextBrowser'}>Ваш браузер слушает вас  </div> : null}
                        </div>
                        <div className={'styleTextBrowser'} style={{display:'flex', justifyContent:'center'}}>{text}</div>
                    </div>
                ) : (
                    <h1>вывод слов</h1>

                )

                }
            </div>
        </div>
    );
}
