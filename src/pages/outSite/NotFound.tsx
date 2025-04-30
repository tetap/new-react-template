import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'
import RouteWrapper from '@/router/RouteWrapper'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <RouteWrapper
      route={{ title: '404' }}
      Comp={
        <Result
          status="404"
          title="404"
          subTitle="抱歉，您访问的页面不存在。"
          extra={
            <Button type="primary" onClick={() => navigate('/')}>
              返回首页
            </Button>
          }
        />
      }
    ></RouteWrapper>
  )
}
