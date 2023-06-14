type TType = 1 | 2 | 3

export interface IMenu {
  id: number | string
  name: string
  type: TType
  path: string
  icon?: string
  children?: IMenu[]
}
