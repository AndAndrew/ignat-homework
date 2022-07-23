import React from 'react'

export type MessageData = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageData) {
    return (
        <div>
            <div><img src={props.avatar}/></div>
            <div>
                <div>
                    <div>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message