import { Modal, message } from 'antd'
import { useApplySwitchboardChanges } from '../../queries'

interface Props {
    isOpen: boolean
    onCancel: () => void
}

export const ConfirmUpdateConvoModal = ({ isOpen, onCancel }: Props) => {
    const updateExistingConversations = useApplySwitchboardChanges()

    const handleSubmit = async () => {
        try {
            await updateExistingConversations.mutateAsync()
            onCancel()
            message.success('Subdomain configured successfully!')
        } catch (e) {
            message.error('Ops, something went wrong.')
        }
    }

    return (
        < Modal
            title="Update Existing Conversations"
            open={isOpen}
            onOk={handleSubmit}
            onCancel={onCancel}
            okText="Confirm"
            destroyOnClose
        >

        </Modal >
    )
}
