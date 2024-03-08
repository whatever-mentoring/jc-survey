import { FormEvent, useState } from 'react'

type Validate = (value: string) => boolean

export function useInput(validate?: Validate) {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (validate && validate(value)) {
      setIsError(true)
      return
    }

    if (isError) {
      setIsError(false)
    }

    setValue(value)
  }

  return { value, isError, handleChange }
}
