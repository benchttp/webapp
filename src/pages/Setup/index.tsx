import { FC, useState } from 'react'
import { ChevronLeft, Copy, Download } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import {
  Card,
  Text,
  TextInput,
  SelectInput,
  NumberInput,
  Button,
  TextAreaInput,
  CheckboxInput,
} from 'components'
import { MainLayout } from 'layouts'
import { getYaml } from 'shared/helpers/utils'
import {
  ButtonAppearance,
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
} from 'shared/style/constants'

import { HeaderInput, QueryParamInput } from './components'
import {
  DEFAULT_HEADERS,
  DEFAULT_QUERY_PARAMS,
  METHOD_OPTIONS,
} from './core/setup.constants'
import {
  handleAddHeaderClick,
  handleAddQueryParamClick,
  handleBackClick,
  handleCopyCommandClick,
  handleDownloadYamlClick,
} from './core/setup.helpers'
import { useSetup } from './core/setup.hook'
import { StyledSetup } from './core/setup.styles'
import { IForm, IHeader, IQueryParam } from './core/setup.types'

export const Setup: FC = () => {
  const navigate = useNavigate()
  const [config, setConfig] = useState<IForm>()
  const [url, setUrl] = useState('')
  const [selectedMethodIndex, setSelectedMethodIndex] = useState<number>(0)
  const [queryParams, setQueryParams] =
    useState<IQueryParam[]>(DEFAULT_QUERY_PARAMS)
  const [headers, setHeaders] = useState<IHeader[]>(DEFAULT_HEADERS)
  const [requests, setRequests] = useState<string>('')
  const [concurrency, setConcurrency] = useState<string>('')
  const [interval, setInterval] = useState<string>('')
  const [requestTimeout, setRequestTimeout] = useState<string>('')
  const [globalTimeout, setGlobalTimeout] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [benchttpOutput, setBenchttpOutput] = useState<boolean>(false)
  const [jsonOutput, setJsonOutput] = useState<boolean>(false)
  const [stdoutOutput, setStdoutOutput] = useState<boolean>(false)
  const [silentOutput, setSilentOutput] = useState<boolean>(false)

  useSetup({
    setConfig,
    url,
    selectedMethodIndex,
    queryParams,
    headers,
    requests,
    concurrency,
    interval,
    requestTimeout,
    globalTimeout,
    body,
    benchttpOutput,
    jsonOutput,
    stdoutOutput,
    silentOutput,
  })

  return (
    <MainLayout hideSidebar>
      <StyledSetup>
        <div className="f f-ai-center mb-4">
          <ChevronLeft
            onClick={handleBackClick(navigate)}
            size={32}
            className="mr-2 cursor-p"
          />
          <Text
            font={FontFamilies.POPPINS}
            size={FontSizes.LARGE}
            weight={FontWeights.BOLD}
          >
            Generate configuration
          </Text>
        </div>
        <div className="f f-jc-space-b">
          <Card className="config mr-4 p-5">
            <div className="mb-6">
              <Text
                className="mb-5"
                font={FontFamilies.POPPINS}
                size={FontSizes.MEDIUM}
                weight={FontWeights.BOLD}
              >
                General
              </Text>
              <div className="f f-jc-space-b mb-5">
                <TextInput
                  label="Url *"
                  name="url"
                  placeholder="https://localhost:3000/items"
                  className="url mr-4"
                  value={url}
                  setValue={setUrl}
                />
                <SelectInput
                  options={METHOD_OPTIONS}
                  label="Method"
                  name="method"
                  className="method"
                  placeholder="Choose an HTTP method"
                  selectedIndex={selectedMethodIndex}
                  setSelectedIndex={setSelectedMethodIndex}
                />
              </div>
              <div className="mb-5">
                <Text
                  font={FontFamilies.POPPINS}
                  weight={FontWeights.BOLD}
                  className="mb-4"
                >
                  Query Parameters
                </Text>
                {queryParams.map((queryParam, index) => (
                  <QueryParamInput
                    key={queryParam.uuid}
                    index={index}
                    className="mb-4"
                    queryParams={queryParams}
                    setQueryParams={setQueryParams}
                  />
                ))}
                <Button
                  appearance={ButtonAppearance.OUTLINE}
                  mainColor={Colors.PRIMARY}
                  secondaryColor={Colors.WHITE}
                  active={true}
                  hover={true}
                  onClick={handleAddQueryParamClick(
                    queryParams,
                    setQueryParams,
                    uuid
                  )}
                >
                  Add query param
                </Button>
              </div>
              <div className="mb-5">
                <Text
                  font={FontFamilies.POPPINS}
                  weight={FontWeights.BOLD}
                  className="mb-4"
                >
                  Headers
                </Text>
                {headers.map((header, index) => (
                  <HeaderInput
                    className="mb-4"
                    key={header.uuid}
                    index={index}
                    headers={headers}
                    setHeaders={setHeaders}
                  />
                ))}
                <Button
                  appearance={ButtonAppearance.OUTLINE}
                  mainColor={Colors.PRIMARY}
                  secondaryColor={Colors.WHITE}
                  active={true}
                  hover={true}
                  onClick={handleAddHeaderClick(headers, setHeaders, uuid)}
                >
                  Add header
                </Button>
              </div>
              <div>
                <Text
                  font={FontFamilies.POPPINS}
                  weight={FontWeights.BOLD}
                  className="mb-3"
                >
                  Body
                </Text>
                <TextAreaInput
                  label="Content"
                  name="content"
                  placeholder={'{ "userId" : 12 }'}
                  className="body"
                  value={body}
                  setValue={setBody}
                />
              </div>
            </div>
            <div className="mb-6">
              <Text
                className="mb-5"
                font={FontFamilies.POPPINS}
                size={FontSizes.MEDIUM}
                weight={FontWeights.BOLD}
              >
                Runner
              </Text>
              <div className="f f-jc-space-b mb-5">
                <NumberInput
                  label="Requests"
                  name="requests"
                  placeholder="1000"
                  className="requests mr-4"
                  value={requests}
                  setValue={setRequests}
                />
                <TextInput
                  label="Concurrency"
                  name="concurrency"
                  placeholder="2"
                  className="concurrency mr-4"
                  value={concurrency}
                  setValue={setConcurrency}
                />
                <NumberInput
                  label="Interval (ms)"
                  name="interval"
                  placeholder="500"
                  className="interval"
                  value={interval}
                  setValue={setInterval}
                />
              </div>
              <div className="f f-jc-space-b">
                <NumberInput
                  label="Global timeout (s)"
                  name="global-timeout"
                  placeholder="60"
                  className="global-timeout mr-4"
                  value={globalTimeout}
                  setValue={setGlobalTimeout}
                />
                <NumberInput
                  label="Request timeout (s)"
                  name="request-timeout"
                  placeholder="2"
                  className="request-timeout"
                  value={requestTimeout}
                  setValue={setRequestTimeout}
                />
              </div>
            </div>
            <div>
              <Text
                className="mb-5"
                font={FontFamilies.POPPINS}
                size={FontSizes.MEDIUM}
                weight={FontWeights.BOLD}
              >
                Output
              </Text>
              <div className="f mb-4">
                <CheckboxInput
                  label="Benchttp"
                  name="benchttp-output"
                  checked={benchttpOutput}
                  setChecked={setBenchttpOutput}
                  className="benchttp mr-4"
                />
                <CheckboxInput
                  label="Json"
                  name="json-output"
                  checked={jsonOutput}
                  setChecked={setJsonOutput}
                  className="json mr-4"
                />
                <CheckboxInput
                  label="Stdout"
                  name="stdout-output"
                  checked={stdoutOutput}
                  setChecked={setStdoutOutput}
                  className="stdout"
                />
              </div>
              <div className="f">
                <CheckboxInput
                  label="Silent"
                  name="silent-output"
                  checked={silentOutput}
                  setChecked={setSilentOutput}
                  className="silent"
                />
              </div>
            </div>
          </Card>
          <Card className="result p-5">
            <Text
              className="mb-5"
              font={FontFamilies.POPPINS}
              size={FontSizes.MEDIUM}
              weight={FontWeights.BOLD}
            >
              Output file
            </Text>

            <pre className="code br-1 p-3">
              <code>{getYaml(config)}</code>
              <div className="icons">
                <Download
                  onClick={handleDownloadYamlClick(config)}
                  className="mr-1 cursor-p"
                />
                <Copy
                  onClick={handleCopyCommandClick(config)}
                  className="cursor-p"
                />
              </div>
            </pre>
          </Card>
        </div>
      </StyledSetup>
    </MainLayout>
  )
}
