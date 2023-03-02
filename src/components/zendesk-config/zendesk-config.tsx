import { useState } from 'react'
import { Button, Space, Typography } from 'antd'
import { CredentialsModal } from './credentials-modal'
import { SubdomainModal } from './subdomain-modal'

import * as S from './styles'

export const ZendeskConfig = () => {
    const [isCredentialsModalOpen, setIsCredentialsModalOpen] = useState(false)
    const [isSubdomainModalOpen, setIsSubdomainModalOpen] = useState(false)

    return (
        <>
            <S.Container>
                <Typography.Title level={3}>Zendesk Configuration</Typography.Title>
                <Space size="middle">
                    <Button
                        onClick={() => setIsCredentialsModalOpen(true)}
                    >
                        Set Credentials
                    </Button>
                    <Button
                        onClick={() => setIsSubdomainModalOpen(true)}
                    >
                        Set Subdomain
                    </Button>
                </Space>
            </S.Container>
            <CredentialsModal
                isOpen={isCredentialsModalOpen}
                onCancel={() => setIsCredentialsModalOpen(false)}
            />
            <SubdomainModal
                isOpen={isSubdomainModalOpen}
                onCancel={() => setIsSubdomainModalOpen(false)}
            />
        </>
    )
}


