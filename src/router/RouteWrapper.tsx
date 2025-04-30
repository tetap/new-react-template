import { useEffect } from 'react'

const RouteWrapper = (props: any) => {
  const { Comp, route } = props
  useEffect(() => {
    const title = route.title
    const originalTitle = document.title
    document.title = title
    return () => {
      document.title = originalTitle
    }
  }, [route])

  return <>{Comp}</>
}

export default RouteWrapper
