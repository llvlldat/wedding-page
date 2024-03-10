import titleFlower from '../../assets/images/sec-title-flower.png'
import style from './style.module.css'

export const Title = ({ header, content }: { header: string; content: string }) => {
    return (
        <div style={{height: '260px'}}>
            <div className={style.title}>
                <img src={titleFlower} alt="" />
                <div>
                    <h1>{header}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
