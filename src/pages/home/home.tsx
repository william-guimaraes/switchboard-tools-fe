import { Divider } from 'antd'
import { Title, ZendeskConfig, SunshineConfig, SwitchboardActions } from '../../components'

import * as S from './styles'

export const Home = () => (
    <S.Container>
        <Title />
        <Divider />
        <ZendeskConfig />
        <Divider />
        <SunshineConfig />
        <Divider />
        <SwitchboardActions />
    </S.Container>
)