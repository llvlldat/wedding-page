import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'

export const Loading = () => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }, [])

    return show ? (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                zIndex: 10000000000,
                background: '#fff',
            }}
        >
            <Spin size="large" />
        </div>
    ) : (
        <></>
    )
}
