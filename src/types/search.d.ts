interface RootObject {
  response: Response
}

interface Response {
  header: Header
  body: Body
}

export interface IBody {
  items: Items
  numOfRows: number
  pageNo: number
  totalCount: number
}

interface Items {
  item: Item[]
}

export interface Iitem {
  sickCd: string
  sickNm: string
}

interface Header {
  resultCode: string
  resultMsg: string
}
