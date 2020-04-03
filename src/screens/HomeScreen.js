import React, { } from 'react'
import Button from 'react-bootstrap/Button'

import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen() {
    const user = useSelector(state => state.user)
    const handleOnClick = () => {

    }

    return (
        <div>
            Home
            <Button onClick={handleOnClick}>{user.name}</Button>
        </div>
    )
}
