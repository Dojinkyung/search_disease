import axios from 'axios'

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'
const DISEASE_BASE_URL = '1352159/crisinfodataview/list'

interface Params {
  srchWord: string
}

export const getDiseaseInfoAPI = (params: Params) =>
  axios({
    method: 'GET',
    url: `${PROXY}/${DISEASE_BASE_URL}`,
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      resultType: 'JSON',
      ...params,
      numOfRows: 10,
      pageNo: 1,
    },
  })
// https://cris.nih.go.kr/cris/api/info/list?serviceKey=3q2I1gYcFtzttJYac7sI%2FZFMcRqOhQzvfpvxvMOmgpRNg1ry3mSJCqy3MGeU%2Fjr5vMjra4UW%2BeMoVB6CmHMlsA%3D%3D&resultType=JSON&srchWord=%EC%8B%AC%EC%9E%A5&numOfRows=1&pageNo=1&SG_APIM=2ug8Dm9qNBfD32JLZGPN64f3EoTlkpD8kSOHWfXpyrY
