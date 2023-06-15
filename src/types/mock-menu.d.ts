type TType = 1 | 2 | 3

export interface IMenu {
  id: number | string
  name: string
  type: TType
  path: string
  hidden: boolean
  icon?: string
  redirect?: string
  children?: IMenu[]
}
