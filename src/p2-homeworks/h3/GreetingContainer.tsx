import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>,
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('name is require');
    const [state, setState] = useState(true);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (value.replace(/\s/g, '') === '') {
            setName('');
            setError('name is require');
        } else {
            setError('');
            setName(value);
            setState(false);
        }
    }
    const addUser = () => {
        alert(name);
        addUserCallback(name);
        setName('');
        setError('name is require');
        setState(true);
        console.log(totalUsers);
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            state={state}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
