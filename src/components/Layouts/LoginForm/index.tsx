import {
  FC,
  useState
} from 'react'
import {
  Input,
  Divider,
  Text,
  Button,
  useInput
} from '@geist-ui/react'
import { UserIcon } from '@heroicons/react/outline'

type LoginFormProps = {
  onLogin: (userName: string, password: string) => void
  onCancel?: () => void
}
const LoginForm: FC<LoginFormProps> = ({
  onLogin,
  onCancel
}) => {
  const {
    state: userName,
    bindings: userNameBindings
  } = useInput('so1ve')
  const {
    state: password,
    bindings: passwordBindings
  } = useInput('114514')

  return (
    <>
      <Text h3>
        Login
      </Text>
      <div className="my-3">
        <Input
          clearable
          scale={4 / 3}
          type="success"
          className="my-6"
          width="100%"
          placeholder="Username"
          {...userNameBindings}
        />
      </div>
      <div className="my-3">
        <Input.Password
          clearable
          scale={4 / 3}
          type="warning"
          width="100%"
          placeholder="Password"
          initialValue="114514"
          {...passwordBindings}
        />
      </div>
      <Divider />
      <div className="my-3">
        <Button
          type="secondary"
          width="100%"
          onClick={() => onLogin(userName, password) }
        >
          Login
        </Button>
      </div>
      <div>
        <Button
          width="100%"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </>
  )
}
LoginForm.displayName = 'DolanLoginForm'

export default LoginForm
