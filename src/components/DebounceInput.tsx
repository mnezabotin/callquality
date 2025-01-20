import { useDebounce } from "@/hooks"
import { Input, InputProps } from "antd"
import { useEffect, useState } from "react"

type Props = InputProps & { onChange: (value: string) => void }

export const DebounceInput = (props: Props): JSX.Element => {
  const [input, setInput] = useState(props.value)
  const debouncedValue = useDebounce(input, input ? 400 : 0)

  useEffect(() => {
    if (props.onChange) {
      props.onChange(debouncedValue)
    }
  }, [debouncedValue])

  return (
    <Input
      {...props}
      value={input}
      onChange={(v) => setInput(v?.target?.value.toString() || '')}
    />
  )
}
