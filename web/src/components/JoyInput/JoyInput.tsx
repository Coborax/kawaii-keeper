import { Input as JoyUIInput } from '@mui/joy'

import { UseFormRegister } from '@redwoodjs/forms'

interface JoyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  register: UseFormRegister
  validation?: Record<string, any>
}

const JoyInput = ({
  name,
  register,
  validation = {},
  ...props
}: JoyInputProps) => {
  const { ref, ...registerProps } = register(name, validation)

  return (
    <JoyUIInput
      {...props}
      {...registerProps}
      slotProps={{
        input: {
          ref,
        },
      }}
    />
  )
}

export default JoyInput
