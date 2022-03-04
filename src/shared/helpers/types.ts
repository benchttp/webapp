export interface IStandardProps {
  className?: string
  id?: string
}

export type CustomFunction<Params, Return> = (params: Params) => Return
