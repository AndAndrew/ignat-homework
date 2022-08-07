import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    let priority
    switch (props.affair.priority) {
        case "low":
            priority = s.low;
            break;
        case "middle":
            priority = s.middle;
            break;
        case "high":
            priority = s.high;
            break;
    }

    return (
        <div className={s.affairBlock}>
            <div>{props.affair.name}</div>
            <div className={priority}>
                [{props.affair.priority}]
            </div>
            <div className={s.button}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
