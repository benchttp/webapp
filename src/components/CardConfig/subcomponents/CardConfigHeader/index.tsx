import { FC, useContext } from 'react'

import { ExpansionPanelContext, Tag, Text } from 'components'
import { HttpMethods } from 'shared/helpers/constants'
import { IconDownload } from 'shared/icons/IconDownload'
import {
  Colors,
  FontFamilies,
  FontWeights,
  FontSizes,
} from 'shared/style/constants'

import { handleDownloadConfigClick } from './core/cardConfigHeader.helpers'
import { IProps } from './core/cardConfigHeader.types'

export const CardConfigHeader: FC<IProps> = (props) => {
  const { className } = props
  const expansionPanelContext = useContext(ExpansionPanelContext)
  const { toggle, isOpen } = { ...expansionPanelContext }

  return (
    <div className={className || ''}>
      <div className="f f-jc-space-b f-ai-start mb-4">
        <div className="f f-ai-center">
          <Tag className="mr-2">https://mytesturl.com/items</Tag>
          <Tag background={Colors.POST} color={Colors.WHITE}>
            {HttpMethods.POST}
          </Tag>
        </div>
        <IconDownload
          onClick={handleDownloadConfigClick}
          color={Colors.WHITE}
        />
      </div>
      <div className="f f-jc-space-b f-ai-end">
        <div className="f f-ai-center">
          <div className="mr-7">
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              10 000
            </Text>
            <Text weight={FontWeights.MEDIUM}>Requests</Text>
          </div>
          <div className="mr-7">
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              20 sec
            </Text>
            <Text weight={FontWeights.MEDIUM}>Test timeout</Text>
          </div>
          <div className="mr-7">
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              20 sec
            </Text>
            <Text weight={FontWeights.MEDIUM}>Request timeout</Text>
          </div>
          <div>
            <Text
              font={FontFamilies.POPPINS}
              weight={FontWeights.BOLD}
              size={FontSizes.LARGE}
            >
              3
            </Text>
            <Text weight={FontWeights.MEDIUM}>Workers</Text>
          </div>
        </div>
        {!isOpen && (
          <div onClick={toggle}>
            <Text font={FontFamilies.POPPINS} weight={FontWeights.BOLD}>
              See more config details
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
