import React, {MouseEvent} from 'react';
import UseScpeechRecognitionTwo from "../hook/UseScpeechRecognitionTwo";
import './pushAndTalkOne.css'
import micro from '../image/micro.svg'


export const PushAndTalkOne = () => {
    const {
        textTwo,
        startListeningTwo,
        stopListeningTwo,
        isListeningTwo,
        hasRecognitionSupport
    } = UseScpeechRecognitionTwo();


    return (
        <div className={'containerMain'}>
            <div className={'containerButton'}>
            {hasRecognitionSupport ? (
                <div className={'containerButton2'}>
                    <div className={'containerButton3'}>
                       {/* <button onMouseDown={startListeningTwo} onMouseUp={stopListeningTwo}>start</button>*/}
                        <img style={{width:'40px', height:'40px',cursor:'pointer'}} onPointerDown={startListeningTwo}
                             onPointerUp={stopListeningTwo} src={micro}/>
                    </div>

                    <div>{isListeningTwo ?
                        <div className={'containerText'}>Ваш браузер слушает вас</div> : null}
                    </div>

                </div>
            ) : (
                <h1>вывод слов</h1>

            )

            }
                <div className={'containerText'}>{textTwo}</div>
            </div>
        </div>
    );
}

