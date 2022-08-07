import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    state: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, state, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : s.inputField

    return (
        <div className={s.greetingBlock}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} disabled={state} className={s.addButton}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorDescription}>{error}</div>
        </div>
    )
}

export default Greeting
