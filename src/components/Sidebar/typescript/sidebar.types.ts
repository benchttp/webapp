import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  tests: ITest[]
}

interface ITest {
  name: string
}

export interface IForm {
  search: string
}
