import { lazyComponent } from '../lazyComponent'

export default [
  {
    path: '/',
    element: lazyComponent(() => import('@/pages/Dashboard'))
  }
]
