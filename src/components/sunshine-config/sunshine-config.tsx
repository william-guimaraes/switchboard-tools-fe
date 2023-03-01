import { useState } from 'react'
import { Button, Typography } from 'antd'
import { AppIdModal } from './appid-modal'
import { CredentialsModal } from './credentials-modal'

export const SunshineConfig = () => {
    const [isCredentialsModalOpen, setIsCredentialsModalOpen] = useState(false)
    const [isAppIdModalOpen, setIsAppIdModalOpen] = useState(false)

    return (
        <>
            <div>
                <Typography.Title level={3}>Sunshine Configuration</Typography.Title>
                <Button onClick={() => setIsAppIdModalOpen(true)}>Set App Id</Button>
                <Button onClick={() => setIsCredentialsModalOpen(true)}>Set Credentials</Button>
            </div>
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
