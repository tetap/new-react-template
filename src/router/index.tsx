/**
 * Created by 叶子 on 2017/8/13.
 */
import React from 'react'
import { Route, redirect, Routes, Navigate } from 'react-router-dom'
import umbrella from 'umbrella-storage'
import routesConfig, { IFMenuBase, IFMenu } from './config'
import { checkLogin } from '../utils'
import RouteWrapper from './RouteWrapper'
import { lazyComponent } from './lazyComponent'
import AllComponents from '../pages'
import type { Location } from 'react-router-dom'

type CRouterProps = {
  auth: any
}

const CRouter = (props: CRouterProps) => {
  const { auth } = props

  const getPermits = (): any[] | null => {
    return auth ? auth.permissions : null
  }
  const requireAuth = (permit: any, component: React.ReactElement) => {
    const permits = getPermits()
    if (!permits || !permits.includes(permit)) return redirect('/not-found')
    return component
  }
  const requireLogin = (component: React.ReactElement, permit: any) => {
    const permits = getPermits()
    // 线上环境判断是否登录
    if (!checkLogin(permits)) {
      return redirect('/login')
    }
    return permit ? requireAuth(permit, component) : component
  }
  const createMenu = (r: IFMenu) => {
    const route = (r: IFMenuBase) => {
      const component = r.component
      if (!component) return <></>
      const Component = lazyComponent(AllComponents[component])
      const wrapper = <RouteWrapper {...{ ...props, Comp: Component, route: r }} />
      const element = r.login ? wrapper : requireLogin(wrapper, r.requireAuth)
      if (element instanceof Response) {
        return <></>
      }
      return <Route key={r.route || r.key} path={r.route || r.key} element={element} />
    }

    const subRoute = (r: IFMenu): any =>
      r.subs && r.subs.map((subR: IFMenu) => (subR.subs ? subRoute(subR) : route(subR)))

    return r.component ? route(r) : subRoute(r)
  }
  const createRoute = (key: string) => routesConfig[key].map(createMenu)
  const getAsyncMenus = () => umbrella.getLocalStorage('smenus') || []
  console.log(routesConfig)
  return (
    <Routes>
      <Route path="/" index element={<Navigate to={routesConfig.menus[0].key} replace />} />
      {Object.keys(routesConfig).map((key) => createRoute(key))}
      {getAsyncMenus().map(createMenu)}
      <Route path="login" element={lazyComponent(AllComponents['Login'])} />
      <Route path="not-found" element={lazyComponent(AllComponents['NotFound'])} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  )
}

export default CRouter
