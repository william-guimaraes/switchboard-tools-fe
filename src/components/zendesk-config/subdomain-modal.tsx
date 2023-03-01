import { Button, Form, Input, Modal, message } from 'antd'
import { useConfigureZendeskSubdomain, ZendeskSubdomainDTO } from '../../queries'

interface Props {
    isOpen: boolean
    onCancel: () => void
}

export const SubdomainModal = ({ isOpen, onCancel }: Props) => {
    const configureSubdomain = useConfigureZendeskSubdomain()

    const handleSubmit = async (data: ZendeskSubdomainDTO) => {
        try {
            await configureSubdomain.mutateAsync(data)
            onCancel()
            message.success('Subdomain configured successfully!')
        } catch (e) {
            message.error('Ops, something went wrong.')
        }
    }

    return (
        < Modal
            title="Configure Zendesk Subdomain"
            open={isOpen}
            onCancel={onCancel}
            footer={<div></div>}
            destroyOnClose
        >
            <Form
                name="subdomain"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item
                    label="Subdomain"
                    name="subdomain"
                    rules={[{ required: true, message: 'Please input your subdomain!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={configureSubdomain.isLoading}
                        disabled={configureSubdomain.isLoading}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}