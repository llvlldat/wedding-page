import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Title } from '../content/title'
import style from './style.module.css'
import { firebase } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'

type FieldType = {
    name: string
    wishes: string
}

export const Footer = () => {
    const { database } = firebase

    const handleSubmit = async (values: FieldType) => {
        console.log(values)
        const wishesRef = collection(database, 'wishes')
        await addDoc(wishesRef, { ...values })
        alert('success')
    }

    return (
        <div className={style.footer}>
            <Title header="Sổ lưu bút" content="Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc!" />
            <Form className={style.form} name="basic" initialValues={{ remember: false }} autoComplete="off" onFinish={handleSubmit}>
                <Form.Item<FieldType> label="Tên của bạn" name="name" rules={[{ required: true, message: 'Hãy cho chúng mình biết tên của bạn!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Lời chúc" name="wishes" rules={[{ required: true, message: 'Nhắn gì cho chúng mình nhé' }]}>
                    <TextArea />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Gửi lời chúc
                </Button>
            </Form>
            <p>Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!</p>
        </div>
    )
}
