import { useState } from 'react'
import { Button, Space, Typography } from 'antd'
import { AppIdModal } from './appid-modal'
import { CredentialsModal } from './credentials-modal'

import * as S from './styles'

export const SunshineConfig = () => {
    const [isCredentialsModalOpen, setIsCredentialsModalOpen] = useState(false)
    const [isAppIdModalOpen, setIsAppIdModalOpen] = useState(false)

    return (
        <>
            <S.Container>
                <Typography.Title level={3}>Sunshine Configuration</Typography.Title>
                <Space size="middle">
                    <Button onClick={() => setIsAppIdModalOpen(true)}>Set App Id</Button>
                    <Button onClick={() => setIsCredentialsModalOpen(true)}>Set Credentials</Button>
                </Space>
            </S.Container>
            <CredentialsModal
                isOpen={isCredentialsModalOpen}
                onCancel={() => setIsCredentialsModalOpen(false)}
            />
            <AppIdModal
                isOpen={isAppIdModalOpen}
                onCancel={() => setIsAppIdModalOpen(false)}
            />
        </>
    )
}
