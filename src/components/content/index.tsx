import { Button, Carousel, Checkbox, Form, Input, Modal, Space, Tabs, TabsProps, message } from 'antd'
import Card from 'antd/es/card/Card'
import Meta from 'antd/es/card/Meta'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { ReactComponent as LocationIcon } from '../../assets/icons/location-dot-solid.svg'
import { ReactComponent as RegisterIcon } from '../../assets/icons/registered-solid.svg'
import DSC03103 from '../../assets/images/DSC03103.jpg'
import DSC03771 from '../../assets/images/DSC03771.jpg'
import DSC03496 from '../../assets/images/DSC03496.jpg'
import DSC03441 from '../../assets/images/DSC03441.jpg'
import DSC03384 from '../../assets/images/DSC03384.jpg'
import { firebase } from '../../firebase'
import { AppButton } from './app-button'
import style from './style.module.css'
import { Title } from './title'

type FieldType = {
    name: string
    confirm: string
}

function Content() {
    const [openModal, setOpenModal] = useState(false)
    const [tab, setTab] = useState('1')
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)
    const { database } = firebase
    const [messageApi, contextHolder] = message.useMessage()

    const onCheckBoxChange = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }

    const onSubmit = async (values: FieldType, friendOf: string) => {
        const invitedList = collection(database, friendOf)
        try {
            await addDoc(invitedList, { name: values.name })
            messageApi.open({ type: 'success', content: 'Cảm ơn rất nhiều vì bạn đã tham dự!' })
            setSubmitDisabled(true)
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'error',
            })
        }
    }

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Lễ cưới nhà gái',
            children: (
                <Form
                    className={style.form}
                    name="basic"
                    initialValues={{ remember: false }}
                    autoComplete="off"
                    onFinish={(values) => onSubmit(values, 'bride')}
                >
                    <Form.Item<FieldType> label="Tên của bạn" name="name" rules={[{ required: true, message: 'Hãy cho chúng mình biết tên của bạn!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> name="confirm" valuePropName="bride">
                        <Checkbox onChange={onCheckBoxChange}>Xác nhận tham dự</Checkbox>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" disabled={submitDisabled}>
                        OK
                    </Button>
                </Form>
            ),
        },
        {
            key: '2',
            label: 'Lễ cưới nhà trai',
            children: (
                <Form
                    className={style.form}
                    name="basic"
                    initialValues={{ remember: false }}
                    autoComplete="off"
                    onFinish={(values) => onSubmit(values, 'groom')}
                >
                    <Form.Item<FieldType> label="Tên của bạn" name="name" rules={[{ required: true, message: 'Hãy cho chúng mình biết tên của bạn!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> name="confirm" valuePropName="groom">
                        <Checkbox onChange={onCheckBoxChange}>Xác nhận tham dự</Checkbox>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" disabled={submitDisabled}>
                        OK
                    </Button>
                </Form>
            ),
        },
    ]

    const showModal = (tab: string) => {
        setOpenModal(true)
        setTab(tab)
    }

    const handleOk = () => {
        setOpenModal(false)
    }

    const handleCancel = () => {
        setOpenModal(false)
    }

    return (
        <div className={style.content}>
            {/* <div>
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
            </div> */}
            <div>
                <Title header="Sự Kiện Cưới" content="...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng..." />
                <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card
                        style={{ width: '90vw' }}
                        cover={
                            <img alt="example" src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg" />
                        }
                        actions={[
                            <a href="https://maps.app.goo.gl/rUeap1sUaQ9J8njf8">
                                <AppButton icon={<LocationIcon key="location" />} title="Địa chỉ" />
                            </a>,
                            <div onClick={() => showModal('1')}>
                                <AppButton icon={<RegisterIcon key="register" />} title="Đăng ký tham dự" />
                            </div>,
                        ]}
                    >
                        <Meta title="LỄ CƯỚI NHÀ GÁI" />
                        <p>5:30 PM, 23/03/2024</p>
                    </Card>
                    <Card
                        style={{ width: '90vw' }}
                        cover={
                            <img alt="example" src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/83d8a5c840b51447ab080ecb9a7de6df.jpeg" />
                        }
                        actions={[
                            <a href="https://maps.app.goo.gl/ZN3ybaGy1chcmE7H9">
                                <AppButton icon={<LocationIcon key="location" />} title="Địa chỉ" />
                            </a>,
                            <div onClick={() => showModal('2')}>
                                <AppButton icon={<RegisterIcon key="register" />} title="Đăng ký tham dự" />
                            </div>,
                        ]}
                    >
                        <Meta title="LỄ CƯỚI NHÀ TRAI" />
                        <p>10:30 AM, 24/03/2024</p>
                    </Card>
                </Space>
            </div>
            <div>
                <Title
                    header="Album Hình Cưới"
                    content="Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí."
                />
                <Carousel className={style.carousel} autoplay autoplaySpeed={5000}>
                    <div>
                        <img src={DSC03103} alt="" />
                    </div>
                    <div>
                        <img src={DSC03771} alt="" />
                    </div>
                    <div>
                        <img src={DSC03496} alt="" />
                    </div>
                    <div>
                        <img src={DSC03441} alt="" />
                    </div>
                    <div>
                        <img src={DSC03384} alt="" />
                    </div>                    
                </Carousel>
            </div>
            {contextHolder}
            <Modal open={openModal} onOk={handleOk} onCancel={handleCancel} footer={(_, { CancelBtn }) => <CancelBtn />}>
                <Tabs defaultActiveKey="1" items={items} activeKey={tab} />
            </Modal>
        </div>
    )
}

export default Content
