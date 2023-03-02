import { useState } from 'react'
import { Button, Typography } from 'antd'
import { ConfirmUpdateConvoModal } from './confirm-modal'

import * as S from './styles'

export const SwitchboardActions = () => {
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

    return (
        <>
            <S.Container>
                <Typography.Title level={3}>Switchboard Actions</Typography.Title>
                <Button onClick={() => setIsConfirmModalOpen(true)}>
                    Update Existing Convo
                </Button>
            </S.Container>
            <ConfirmUpdateConvoModal
                isOpen={isConfirmModalOpen}
                onCancel={() => setIsConfirmModalOpen(false)}

            />
        </>
    )
}