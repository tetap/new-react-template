export default {
  Dashboard: () => import('./Dashboard'),
  NotFound: () => import('./outSite/NotFound')
} as Record<string, any>
