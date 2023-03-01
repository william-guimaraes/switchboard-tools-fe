import { useState } from 'react'
import { Button, Typography } from 'antd'
import { ConfirmUpdateConvoModal } from './confirm-modal'

export const SwitchboardActions = () => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

    return (
        <>
            <div>
                <Typography.Title level={3}>Switchboard Actions</Typography.Title>
                <Button onClick={() => setIsConfirmModalOpen(true)}>
                    Update Existing Convo
                </Button>
            </div>
            <ConfirmUpdateConvoModal
                isOpen={isConfirmModalOpen}
                onCancel={() => setIsConfirmModalOpen(false)}

            />
        </>
    )
}