import ServiceInstances from './axios'
// import { getParsedQueryString } from '@/utils/headerQueryParser'

export default class HttpService extends ServiceInstances {
  constructor() {
    super()
  }

  async get(config: any) {
    const { path, params } = config
    // return await this.serviceInstance.get(`${path}?${getParsedQueryString(params)}`)
    return await this.serviceInstance.get(`${path}`)

  }

  async post(config: any) {
    const { path, payload, params } = config
    return await this.serviceInstance.post(path, payload, {
      params
    })
  }
}