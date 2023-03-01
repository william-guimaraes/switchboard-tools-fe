import { Button, Form, Input, Modal, message } from 'antd'
import { useConfigureSunshineAppId, SunshineAppDTO } from '../../queries'

interface Props {
    isOpen: boolean
    onCancel: () => void
}

export const AppIdModal = ({ isOpen, onCancel }: Props) => {
    const configureAppId = useConfigureSunshineAppId()

    const handleSubmit = async (data: SunshineAppDTO) => {
        try {
            await configureAppId.mutateAsync(data)
            onCancel()
            message.success('Subdomain configured successfully!')
        } catch (e) {
            message.error('Ops, something went wrong.')
        }
    }

    return (
        < Modal
            title="Configure Sunshine App Id"
            open={isOpen}
            onCancel={onCancel}
            footer={<div></div>}
            destroyOnClose
        >
            <Form
                name="appId"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item
                    label="App Id"
                    name="appId"
                    rules={[{ required: true, message: 'Please input your subdomain!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={configureAppId.isLoading}
                        disabled={configureAppId.isLoading}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}