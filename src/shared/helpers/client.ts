import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

const requestHook = async (request: AxiosRequestConfig) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
  console.log(request)
  let headerAPI: Record<string, string> = {}
  // add token for github
  // if (request.url?.includes('github.com')) {
  //   headerAPI = {
  //     Authorization: `token ${
  //       localStorage.getItem('githubToken') ?? 'invalid'
  //     }`,
  //   }
  // }
  // add token for API
  if (request.url?.includes(process.env.REACT_APP_API_URL as string)) {
    headerAPI = {
      Authorization: `Bearer ${
        localStorage.getItem('benchttpToken') ?? 'invalid'
      }`,
    }
  }

  request.headers = Object.assign({ ...headerAPI, ...headers }, request.headers)
  return request
}

const installAxiosHook = (axios: AxiosInstance): AxiosInstance => {
  axios.interceptors.request.use(requestHook)
  return axios
}

const axiosInstance = axios.create()
installAxiosHook(axiosInstance)

export const client = async <T>(
  endpoint: string,
  config: Partial<AxiosRequestConfig> & Partial<{ body: unknown }> = {}
) => {
  return axiosInstance.request<T>({
    method: config.method || 'GET',
    url: endpoint.includes('https')
      ? endpoint
      : `${process.env.REACT_APP_API_URI}/${endpoint}`,
    ...config,
    data: config.data,
    headers: config.headers,
  })
}
