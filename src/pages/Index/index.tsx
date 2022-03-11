import { FC, useState } from 'react'

import { Button, Card, LineChart, Text } from 'components'
import {
  FontFamilies,
  FontSizes,
  ButtonAppearance,
  Colors,
} from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'
import { CardRequest } from 'components/CardRequest'
import { convertInMs } from 'shared/helpers/utils'

export const Index: FC = () => {
  const [showCumulativeChart, setShowCumulativeChart] = useState(false)

  const dataReport = [
    {
      time: 155343827,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1625405,
        },
        {
          name: 'ConnectDone',
          time: 20488640,
        },
        {
          name: 'WroteHeaders',
          time: 20682124,
        },
        {
          name: 'WroteRequest',
          time: 20682631,
        },
        {
          name: 'GotFirstResponseByte',
          time: 155009018,
        },
        {
          name: 'PutIdleConn',
          time: 155164781,
        },
        {
          name: 'BodyRead',
          time: 155343827,
        },
      ],
    },
    {
      time: 265384707,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1685320,
        },
        {
          name: 'ConnectDone',
          time: 20446213,
        },
        {
          name: 'WroteHeaders',
          time: 20518800,
        },
        {
          name: 'WroteRequest',
          time: 20519746,
        },
        {
          name: 'GotFirstResponseByte',
          time: 265232769,
        },
        {
          name: 'PutIdleConn',
          time: 265311595,
        },
        {
          name: 'BodyRead',
          time: 265384707,
        },
      ],
    },
    {
      time: 265030792,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 980723,
        },
        {
          name: 'ConnectDone',
          time: 20037137,
        },
        {
          name: 'WroteHeaders',
          time: 20218678,
        },
        {
          name: 'WroteRequest',
          time: 20219085,
        },
        {
          name: 'GotFirstResponseByte',
          time: 264585242,
        },
        {
          name: 'PutIdleConn',
          time: 264694247,
        },
        {
          name: 'BodyRead',
          time: 265030792,
        },
      ],
    },
    {
      time: 265462649,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1307535,
        },
        {
          name: 'ConnectDone',
          time: 19883470,
        },
        {
          name: 'WroteHeaders',
          time: 19940357,
        },
        {
          name: 'WroteRequest',
          time: 19943163,
        },
        {
          name: 'GotFirstResponseByte',
          time: 264909083,
        },
        {
          name: 'PutIdleConn',
          time: 265225228,
        },
        {
          name: 'BodyRead',
          time: 265462649,
        },
      ],
    },
    {
      time: 265689074,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1269010,
        },
        {
          name: 'ConnectDone',
          time: 20284417,
        },
        {
          name: 'WroteHeaders',
          time: 20470463,
        },
        {
          name: 'WroteRequest',
          time: 20470847,
        },
        {
          name: 'GotFirstResponseByte',
          time: 264818433,
        },
        {
          name: 'PutIdleConn',
          time: 265081914,
        },
        {
          name: 'BodyRead',
          time: 265689074,
        },
      ],
    },
    {
      time: 265552743,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 938485,
        },
        {
          name: 'ConnectDone',
          time: 19714109,
        },
        {
          name: 'WroteHeaders',
          time: 19803534,
        },
        {
          name: 'WroteRequest',
          time: 19806438,
        },
        {
          name: 'GotFirstResponseByte',
          time: 264899770,
        },
        {
          name: 'PutIdleConn',
          time: 265229168,
        },
        {
          name: 'BodyRead',
          time: 265552743,
        },
      ],
    },
    {
      time: 265777835,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1134829,
        },
        {
          name: 'ConnectDone',
          time: 20222097,
        },
        {
          name: 'WroteHeaders',
          time: 20428668,
        },
        {
          name: 'WroteRequest',
          time: 20429642,
        },
        {
          name: 'GotFirstResponseByte',
          time: 265521722,
        },
        {
          name: 'PutIdleConn',
          time: 265605803,
        },
        {
          name: 'BodyRead',
          time: 265777835,
        },
      ],
    },
    {
      time: 265466097,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 688265,
        },
        {
          name: 'ConnectDone',
          time: 19948219,
        },
        {
          name: 'WroteHeaders',
          time: 20121868,
        },
        {
          name: 'WroteRequest',
          time: 20122351,
        },
        {
          name: 'GotFirstResponseByte',
          time: 265210927,
        },
        {
          name: 'PutIdleConn',
          time: 265258486,
        },
        {
          name: 'BodyRead',
          time: 265466097,
        },
      ],
    },
    {
      time: 380200694,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1080362,
        },
        {
          name: 'ConnectDone',
          time: 19993717,
        },
        {
          name: 'WroteHeaders',
          time: 20183873,
        },
        {
          name: 'WroteRequest',
          time: 20184266,
        },
        {
          name: 'GotFirstResponseByte',
          time: 380041211,
        },
        {
          name: 'PutIdleConn',
          time: 380134853,
        },
        {
          name: 'BodyRead',
          time: 380200694,
        },
      ],
    },
    {
      time: 380639249,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1225677,
        },
        {
          name: 'ConnectDone',
          time: 20465844,
        },
        {
          name: 'WroteHeaders',
          time: 20643172,
        },
        {
          name: 'WroteRequest',
          time: 20643538,
        },
        {
          name: 'GotFirstResponseByte',
          time: 380430029,
        },
        {
          name: 'PutIdleConn',
          time: 380510735,
        },
        {
          name: 'BodyRead',
          time: 380639249,
        },
      ],
    },
    {
      time: 172343630,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'WroteHeaders',
          time: 51702,
        },
        {
          name: 'WroteRequest',
          time: 57132,
        },
        {
          name: 'GotFirstResponseByte',
          time: 171438425,
        },
        {
          name: 'PutIdleConn',
          time: 171972689,
        },
        {
          name: 'BodyRead',
          time: 172343630,
        },
      ],
    },
    {
      time: 174418329,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 2469259,
        },
        {
          name: 'ConnectDone',
          time: 27138628,
        },
        {
          name: 'WroteHeaders',
          time: 27566062,
        },
        {
          name: 'WroteRequest',
          time: 27569468,
        },
        {
          name: 'GotFirstResponseByte',
          time: 174259853,
        },
        {
          name: 'PutIdleConn',
          time: 174338723,
        },
        {
          name: 'BodyRead',
          time: 174418329,
        },
      ],
    },
    {
      time: 174574580,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'WroteHeaders',
          time: 84101,
        },
        {
          name: 'WroteRequest',
          time: 90084,
        },
        {
          name: 'GotFirstResponseByte',
          time: 174308039,
        },
        {
          name: 'PutIdleConn',
          time: 174417134,
        },
        {
          name: 'BodyRead',
          time: 174574580,
        },
      ],
    },
    {
      time: 174346399,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 2160789,
        },
        {
          name: 'ConnectDone',
          time: 26657491,
        },
        {
          name: 'WroteHeaders',
          time: 27101803,
        },
        {
          name: 'WroteRequest',
          time: 27104797,
        },
        {
          name: 'GotFirstResponseByte',
          time: 173880938,
        },
        {
          name: 'PutIdleConn',
          time: 173929822,
        },
        {
          name: 'BodyRead',
          time: 174346399,
        },
      ],
    },
    {
      time: 174860548,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 2851192,
        },
        {
          name: 'ConnectDone',
          time: 26953928,
        },
        {
          name: 'WroteHeaders',
          time: 27170428,
        },
        {
          name: 'WroteRequest',
          time: 27176257,
        },
        {
          name: 'GotFirstResponseByte',
          time: 174156174,
        },
        {
          name: 'PutIdleConn',
          time: 174715053,
        },
        {
          name: 'BodyRead',
          time: 174860548,
        },
      ],
    },
    {
      time: 174763367,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 2234244,
        },
        {
          name: 'ConnectDone',
          time: 17222355,
        },
        {
          name: 'WroteHeaders',
          time: 17322232,
        },
        {
          name: 'WroteRequest',
          time: 17325125,
        },
        {
          name: 'GotFirstResponseByte',
          time: 174045825,
        },
        {
          name: 'PutIdleConn',
          time: 174134899,
        },
        {
          name: 'BodyRead',
          time: 174763367,
        },
      ],
    },
    {
      time: 174737615,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 2015094,
        },
        {
          name: 'ConnectDone',
          time: 17063240,
        },
        {
          name: 'WroteHeaders',
          time: 17167931,
        },
        {
          name: 'WroteRequest',
          time: 17172482,
        },
        {
          name: 'GotFirstResponseByte',
          time: 174302421,
        },
        {
          name: 'PutIdleConn',
          time: 174460613,
        },
        {
          name: 'BodyRead',
          time: 174737615,
        },
      ],
    },
    {
      time: 175311402,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'WroteHeaders',
          time: 72423,
        },
        {
          name: 'WroteRequest',
          time: 76011,
        },
        {
          name: 'GotFirstResponseByte',
          time: 174929165,
        },
        {
          name: 'PutIdleConn',
          time: 174980905,
        },
        {
          name: 'BodyRead',
          time: 175311402,
        },
      ],
    },
    {
      time: 162140232,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 1883175,
        },
        {
          name: 'ConnectDone',
          time: 17630417,
        },
        {
          name: 'WroteHeaders',
          time: 17805039,
        },
        {
          name: 'WroteRequest',
          time: 17809689,
        },
        {
          name: 'GotFirstResponseByte',
          time: 161878948,
        },
        {
          name: 'PutIdleConn',
          time: 161989824,
        },
        {
          name: 'BodyRead',
          time: 162140232,
        },
      ],
    },
    {
      time: 169134516,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'DNSDone',
          time: 2350813,
        },
        {
          name: 'ConnectDone',
          time: 26963675,
        },
        {
          name: 'WroteHeaders',
          time: 27128140,
        },
        {
          name: 'WroteRequest',
          time: 27131392,
        },
        {
          name: 'GotFirstResponseByte',
          time: 168923863,
        },
        {
          name: 'PutIdleConn',
          time: 168990738,
        },
        {
          name: 'BodyRead',
          time: 169134516,
        },
      ],
    },
    {
      time: 169176452,
      code: 200,
      bytes: 46,
      events: [
        {
          name: 'WroteHeaders',
          time: 98803,
        },
        {
          name: 'WroteRequest',
          time: 103102,
        },
        {
          name: 'GotFirstResponseByte',
          time: 168812160,
        },
        {
          name: 'PutIdleConn',
          time: 169002100,
        },
        {
          name: 'BodyRead',
          time: 169176452,
        },
      ],
    },
  ]

  const graphData = dataReport.map((event, i) => {
    return { x: i, y: convertInMs(event.time) }
  })

  const graphDataCumulative = dataReport.map((event, i) => {
    if (i > 0) {
      let time = 0
      for (let j = 0; j <= i; j++) {
        time += dataReport[j].time
      }
      return {
        x: i,
        y: convertInMs(time),
      }
    }
    return {
      x: i,
      y: convertInMs(event.time),
    }
  })

  return (
    <MainLayout>
      <Text className="mb-4" font={FontFamilies.POPPINS} size={FontSizes.LARGE}>
        Config
      </Text>
      <Card>
        <Button
          appearance={ButtonAppearance.OUTLINE}
          mainColor={Colors.WHITE}
          secondaryColor={Colors.BLACK}
          hover={true}
          active={true}
          onClick={() =>
            showCumulativeChart
              ? setShowCumulativeChart(false)
              : setShowCumulativeChart(true)
          }
        />
        {showCumulativeChart ? (
          <LineChart
            legendY="time/req"
            data={[{ id: 'linear', data: graphData }]}
          />
        ) : (
          <LineChart
            legendY="time/req"
            data={[{ id: 'cumulative', data: graphDataCumulative }]}
          />
        )}
      </Card>
      {dataReport.slice(0, 50).map((item, i) => (
        <CardRequest
          key={i}
          index={i}
          responseCode={item.code}
          responseTime={convertInMs(item.time)}
          responseSize={item.bytes}
          chartData={item.events}
        />
      ))}
    </MainLayout>
  )
}
