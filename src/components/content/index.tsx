import { Space } from 'antd'
import Card from 'antd/es/card/Card'
import Meta from 'antd/es/card/Meta'
import bride from '../../assets/images/DSC03059.jpg'
import groom from '../../assets/images/DSC03191.jpg'
import style from './style.module.css'
import { Title } from './title'

function Content() {
    return (
        <div className={style.content}>
            <div>
                <Title header="Cặp Đôi" content="Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn." />
                <div>
                    <img src={groom} alt="" style={{ width: '100vw', height: '100vw', objectFit: 'cover', objectPosition: 'top' }} />
                    <section>
                        <h3>Do Ngoc Minh Dat</h3>
                        <p>
                            Con ông: <span>Do Van Sau</span>
                        </p>
                        <p>
                            Con bà: <span>Duong Thi Van Anh</span>{' '}
                        </p>
                        <p>...</p>
                    </section>
                    <img src={bride} alt="" style={{ width: '100vw', height: '100vw', objectFit: 'cover', objectPosition: 'top' }} />
                    <section>
                        <h3>Lam Thi Hue</h3>
                        <p>
                            Con ông: <span>Lam Viet Hai</span>
                        </p>
                        <p>
                            Con bà: <span>Lan</span>{' '}
                        </p>
                        <p>...</p>
                    </section>
                </div>
            </div>
            <div>
                <Title
                    header="Album Hình Cưới"
                    content="Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí."
                />
                <p>Inprogress...</p>
            </div>
            <div>
                <Title header="Sự Kiện Cưới" content="...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng..." />
                <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card
                        style={{ width: '90vw' }}
                        cover={
                            <img alt="example" src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg" />
                        }
                    >
                        <Meta title="LỄ CƯỚI NHÀ NỮ" />
                        <p>5:30 PM, 23/03/2024</p>
                    </Card>
                    <Card
                        style={{ width: '90vw' }}
                        cover={
                            <img alt="example" src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/83d8a5c840b51447ab080ecb9a7de6df.jpeg" />
                        }
                    >
                        <Meta title="LỄ CƯỚI NHÀ NAM" />
                        <p>10:30 AM, 24/03/2024</p>
                    </Card>
                </Space>
            </div>
        </div>
    )
}

export default Content
