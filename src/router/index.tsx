import { RouteObject, useRoutes } from 'react-router-dom'
import { lazyComponent } from './lazyComponent'

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyComponent(() => import('@/pages/Dashboard'))
  },
  {
    path: '/abort',
    element: lazyComponent(() => import('@/pages/Abort'))
  }
]

export default function () {
  return useRoutes(routes)
}
