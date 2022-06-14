import axios from 'axios'

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'
const DISEASE_BASE_URL = 'B551182/diseaseInfoService/getDissNameCodeList?sickType=1&medTp=2&diseaseType=SICK_NM'

interface Params {
  searchText: string
}

export const getDiseaseInfoAPI = (params: Params) =>
  axios({
    method: 'GET',
    url: `${PROXY}/${DISEASE_BASE_URL}`,
    params: {
      ...params,
      ServiceKey: process.env.REACT_APP_API_KEY,
      _type: 'json',
    },
  })
