import { useQuery } from 'react-query'
import { getDiseaseInfoAPI } from '../../services/disease'
import { isAxiosError } from '../../utils/axios'

const useSearch = (searchText: string) => {
  const { data, isLoading } = useQuery(
    ['getDiseaseInfoAPI', searchText],
    () => getDiseaseInfoAPI({ searchText }).then((res) => res.data.response.body.items.item),
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
