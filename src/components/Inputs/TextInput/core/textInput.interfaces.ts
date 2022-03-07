/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseSyntheticEvent } from 'react'
import { Icon } from 'react-feather'
import { UseControllerProps } from 'react-hook-form'

import { IStandardProps } from 'shared/helpers/types'
import { Colors } from 'shared/style/constants'

export type IProps =
  | (IStandard & IWithIcon)
  | (IStandard & IWithoutIcon)
  | (IStandalone & IWithIcon)
  | (IStandalone & IWithoutIcon)

interface IGenericProps extends IStandardProps, UseControllerProps<any> {
  name: string
  label?: string
  placeholder?: string
  icon?: Icon
  iconPosition?: 'left' | 'right'
  iconColor?: Colors
}

interface IStandalone extends IGenericProps {
  submitOnChange: true
  onChange: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}

interface IStandard extends IGenericProps {
  submitOnChange: false
  onChange: undefined
}

interface IWithIcon {
  hasIcon: true
  icon: Icon
  iconPosition?: 'left' | 'right'
  iconColor?: Colors
}

interface IWithoutIcon {
  hasIcon: false
  icon: undefined
  iconPosition: undefined
  iconColor: undefined
}
