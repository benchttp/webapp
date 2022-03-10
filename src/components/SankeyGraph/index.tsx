import { FC, useEffect, useState } from 'react'

import { ResponsiveSankey } from '@nivo/sankey'
import { IProps } from './core/SankeyGraph.types'

export const SankeyGraph: FC<IProps> = (props) => {
  const nodes: { id: string; nodeColor: string }[] = []
  const links: { source: string; target: string; value: number }[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData]: any = useState(null)
  const nodecolor: string[] = [
    'hsl(26, 70%, 50%)',
    'hsl(37, 70%, 50%)',
    'hsl(322, 70%, 50%)',
    'hsl(134, 70%, 50%)',
    'hsl(324, 70%, 50%)',
    'hsl(47, 70%, 50%)',
    'hsl(47, 70%, 50%)',
  ]
  const tab: string[] = []
  const array: number[] = []
  const creategraphObject = () => {
    props.data.map((elt) => {
      tab.push(elt.name)
      array.push(elt.time)
    })
    nodecolor.map((e, idx) => {
      nodes.push({
        id: tab[idx],
        nodeColor: e,
      })
    })
    tab.map((elt, idx) => {
      if (tab[idx + 1] !== undefined) {
        links.push({
          source: tab[idx],
          target: tab[idx + 1],
          value: array[idx],
        })
      }
    })
    console.log(nodes, links)
    setData({ nodes: nodes, links: links })
  }
  useEffect(() => {
    creategraphObject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    data && (
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: 'dark2' }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={66}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={50}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1]],
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 130,
            itemWidth: 100,
            itemHeight: 14,
            itemDirection: 'right-to-left',
            itemsSpacing: 2,
            itemTextColor: '#999',
            symbolSize: 14,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    )
  )
}
