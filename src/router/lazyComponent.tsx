import { Suspense, lazy } from 'react'

const Loading = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
    Loading...
  </div>
)

export function lazyComponent(func: () => Promise<{ default: React.ComponentType<any> }>) {
  const Element = lazy(func)
  return (
    <Suspense fallback={<Loading />}>
      <Element />
    </Suspense>
  )
}
