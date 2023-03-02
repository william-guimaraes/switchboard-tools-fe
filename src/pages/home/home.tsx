import { Divider, Typography, Space } from 'antd'
import { ZendeskConfig, SunshineConfig, SwitchboardActions } from '../../components'

import * as S from './styles'

export const Home = () => (
    <S.Container>
        <S.TitleContainer>
            <Space direction='vertical'>
                <Typography.Title
                    level={2}
                    style={{ margin: 0 }}
                >
                    Switchboard Tools
                </Typography.Title>
                <Typography.Title
                    level={4}
                    style={{ margin: 0 }}
                >
                    Develop by Sunshine Technical Architects Team
                </Typography.Title>
            </Space>
        </S.TitleContainer>
        <Divider />
        <S.ConfigContainer>
            <ZendeskConfig />
            <Divider type="vertical" style={{ height: 'auto' }} />
            <SunshineConfig />
        </S.ConfigContainer>
        <Divider />
        <SwitchboardActions />
    </S.Container>
)
