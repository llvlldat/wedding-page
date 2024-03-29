import Countdown from 'react-countdown'
import DSC03513 from '../../assets/images/DSC03513.jpg'
import style from './style.module.css'

export const Header = () => {
    const weddingDate = new Date('2024-03-24T08:30:00.000')

    return (
        <header className={style.header}>
            <div>
                <a href="/">
                    <h1>
                        <span>Minh Đạt</span>
                        <span> & </span>
                        <span>Lâm Huế</span>
                    </h1>
                </a>
            </div>
            <div className={style.mainHeader}>
                <div className={style.carousel}>
                    <div>
                        <img src={DSC03513} alt="" />
                    </div>
                </div>
                <div className={style.bubbleHeader}>
                    <div className={style.carouselLayer}>
                        <div>
                            <span>Minh Đạt</span>
                            <span> & </span>
                            <span>Lâm Huế</span>
                        </div>
                        <p>WE'RE GETTING MARRIED</p>
                    </div>
                    <Countdown
                        date={weddingDate}
                        renderer={({ days, hours, minutes, seconds }) => (
                            <div className={style.counter}>
                                <div>
                                    <span>{days}</span>
                                    <span>ngày</span>
                                </div>
                                <div>
                                    <span>{hours}</span>
                                    <span>giờ</span>
                                </div>
                                <div>
                                    <span>{minutes}</span>
                                    <span>phút</span>
                                </div>
                                <div>
                                    <span>{seconds}</span>
                                    <span>giây</span>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </header>
    )
}
