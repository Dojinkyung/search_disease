import { KeyboardEvent, RefObject, Dispatch, SetStateAction } from 'react'
import { Iitem } from '../types/search.d'

const handleKeyboardFunc = (
  keyItems: Iitem[] | undefined,
  index: number,
  autoRef: RefObject<HTMLUListElement>,
  setIndex: Dispatch<SetStateAction<number>>,
  e: KeyboardEvent<HTMLFormElement>
) => {
  if (keyItems) {
    switch (e.key) {
      case 'ArrowDown':
        if (autoRef.current?.childElementCount === index + 1) {
          setIndex(0)
          break
        }

        setIndex((prev) => prev + 1)
        break

      case 'ArrowUp':
        if (autoRef.current && index === -1) {
          setIndex(autoRef.current.childElementCount)
          break
        }

        if (index <= 0) {
          setIndex(-1)
          break
        }

        setIndex((prev) => prev - 1)
        break

      case 'Escape':
        setIndex(-1)
        break
    }
  }
}

export default handleKeyboardFunc
