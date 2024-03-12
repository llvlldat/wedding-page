import { Button, Form, Input, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Title } from '../content/title'
import style from './style.module.css'
import { firebase } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'

type FieldType = {
    name: string
    wishes: string
}

export const Footer = () => {
    const { database } = firebase
    const [messageApi, contextHolder] = message.useMessage()
    const [disableButton, setDisableButton] = useState(false)

    const handleSubmit = async (values: FieldType) => {
        const wishesRef = collection(database, 'wishes')
        try {
            await addDoc(wishesRef, { ...values })
            messageApi.open({ type: 'success', content: 'Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!' })
            setDisableButton(true)
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'error',
            })
        }
    }

    return (
        <div className={style.footer}>
            {contextHolder}
            <Title header="Sổ lưu bút" content="Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc!" />
            <Form className={style.form} name="basic" initialValues={{ remember: false }} autoComplete="off" onFinish={handleSubmit}>
                <Form.Item<FieldType> label="Tên của bạn" name="name" rules={[{ required: true, message: 'Hãy cho chúng mình biết tên của bạn!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Lời chúc" name="wishes" rules={[{ required: true, message: 'Nhắn gì cho chúng mình nhé' }]}>
                    <TextArea />
                </Form.Item>

                <Button type="primary" htmlType="submit" disabled={disableButton}>
                    Gửi lời chúc
                </Button>
            </Form>
            <footer>Thank You!</footer>
        </div>
    )
}
