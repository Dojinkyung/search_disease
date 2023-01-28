import { useQuery } from 'react-query'
import { isAxiosError } from '../utils/axios'
import { getDiseaseInfoAPI } from './getDisease'

const useSearch = (srchWord: string) => {
  const { data, isLoading } = useQuery(
    ['getDiseaseInfoAPI', srchWord],
    () => getDiseaseInfoAPI({ srchWord }).then((res) => res.data.items),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )

  let items

  if (Array.isArray(data)) {
    items = data
  } else if (typeof data === 'object') {
    items = [data]
  } else if (typeof data === 'string') {
    items = []
  }
  return { items, isLoading }
}

export default useSearch
