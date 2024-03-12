import React from 'react'
import style from './style.module.css'

export const AppButton = ({ icon, title }: { icon: JSX.Element; title: string }) => {
    return (
        <div className={style.appButton}>
            {icon}
            <span>{title}</span>
        </div>
    )
}
