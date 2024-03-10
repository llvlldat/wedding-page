import { CloseOutlined, CommentOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { FloatButton, Modal, Tabs, TabsProps } from 'antd'
import { useState } from 'react'
import { ReactComponent as DollarIcon } from '../../assets/icons/circle-dollar-to-slot-solid.svg'
import QRBride from '../../assets/images/QR_Hue.jpg'
import QRGroom from '../../assets/images/QR_Dat.jpg'
import style from './style.module.css'

export const SideBar = () => {
    const [open, setOpen] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Mừng cô dâu',
            children: (
                <>
                    <img src={QRBride} style={{ width: '100%', height: '100%' }} alt="" />
                    <p>Tài khoản: Lam Thi Hue</p>
                    <p>Ngân hàng: TP Bank</p>
                    <p>STK: 0715 9751 401 (lamhue23)</p>
                </>
            ),
        },
        {
            key: '2',
            label: 'Mừng chú rể',
            children: (
                <>
                    <img src={QRGroom} style={{ width: '100%', height: '100%' }} alt="" />
                    <p>Tài khoản: Do Ngoc Minh Dat</p>
                    <p>Ngân hàng: TP Bank</p>
                    <p>STK: 5596 3112 058</p>
                </>
            ),
        },
    ]

    const showModal = () => {
        setOpenModal(true)
    }

    const handleOk = () => {
        setOpenModal(false)
    }

    const handleCancel = () => {
        setOpenModal(false)
    }

    return (
        <>
            <FloatButton.Group
                closeIcon={<CloseOutlined onClick={() => setOpen(false)} />}
                open={open}
                trigger="click"
                style={{ right: 22 }}
                type="primary"
                icon={<UnorderedListOutlined onClick={() => setOpen(true)} type="danger" />}
                className={style.sidebar}
            >
                <FloatButton onClick={showModal} tooltip={<div>Mừng cưới</div>} icon={<DollarIcon />} type="primary" />
                <FloatButton tooltip={<div>Gửi lời chúc</div>} icon={<CommentOutlined />} type="primary" />
            </FloatButton.Group>
            <Modal open={openModal} onOk={handleOk} onCancel={handleCancel} footer={(_, { CancelBtn }) => <CancelBtn />}>
                <Tabs defaultActiveKey="1" items={items} />
            </Modal>
        </>
    )
}
