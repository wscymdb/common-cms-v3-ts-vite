import type { RouteComponent, RouteMeta } from 'vue-router'

interface IRouteMeta extends RouteMeta {
  title: string
}

declare type RawRouteComponent = RouteComponent | Lazy<RouteComponent>

declare type Lazy<T> = () => Promise<T>

export interface IRouteRecordRaw {
  id: string
  path: string
  name: string | null | undefined
  meta: IRouteMeta
  sidebar: boolean
  component: RawRouteComponent
  children?: IRouteRecordRaw[]
}
