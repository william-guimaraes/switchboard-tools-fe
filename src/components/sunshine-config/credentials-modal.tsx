import { Button, Form, Input, Modal, message } from 'antd'
import { useConfigureSunshineCredentials, SunshineCredentialsDTO } from '../../queries'

interface Props {
    isOpen: boolean
    onCancel: () => void
}

export const CredentialsModal = ({ isOpen, onCancel }: Props) => {
    const configureCredentials = useConfigureSunshineCredentials()

    const handleSubmit = async (data: SunshineCredentialsDTO) => {
        try {
            await configureCredentials.mutateAsync(data)
            onCancel()
            message.success('Credentials configured successfully!')
        } catch (e) {
            message.error('Ops, something went wrong.')
        }
    }

    return (
        < Modal
            title="Configure Sunshine Credentials"
            open={isOpen}
            onCancel={onCancel}
            footer={<div></div>}
            destroyOnClose
        >
            <Form
                name="credentials"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item
                    label="Key ID"
                    name="keyId"
                    rules={[{ required: true, message: 'Please input your Key ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Key Secret"
                    name="keySecret"
                    rules={[{ required: true, message: 'Please input your Key Secret!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={configureCredentials.isLoading}
                        disabled={configureCredentials.isLoading}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}