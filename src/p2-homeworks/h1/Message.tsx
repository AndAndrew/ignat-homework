import React from 'react'
import s from './Message.module.css'

export type MessageData = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageData) {
    return (
        <div>
            <div className={s.messageBlock}><img className={s.avatar} src={props.avatar}/></div>
            <div className={s.messageBlock}>
                <div className={s.message}>
                    <div className={s.messageBlock}>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.messageText}>{props.message}</div>
                    </div>
                    <div className={s.timeBlock}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message