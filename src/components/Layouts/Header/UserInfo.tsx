import { FC } from 'react'
import {
  Modal,
  Input,
  useModal
} from '@geist-ui/react'
import { UserIcon } from '@heroicons/react/outline'

const UserInfo: FC<unknown> = () => {
  const { visible, setVisible, bindings } = useModal()

  return (
    <>
      <div
        className="flex items-center cursor-pointer mx-3"
        onClick={() => setVisible(true)}
      >
        <UserIcon className="w-6 h-6" />
      </div>
      <Modal {...bindings}>
        <Modal.Title>Login</Modal.Title>
        <Modal.Subtitle>Aww man? 登录？不可能的</Modal.Subtitle>
        <Modal.Content>
          <Input
            clearable
            className="my-6"
            width="100%"
            placeholder="Username"
            initialValue="so1ve"
          />
          <Input.Password
            clearable
            className="my-6"
            width="100%"
            placeholder="Password"
            initialValue="114514"
          />
        </Modal.Content>
        <Modal.Action
          passive
          onClick={() => setVisible(false)}
        >Cancel</Modal.Action>
        <Modal.Action onClick={() => setVisible(false)}>Login</Modal.Action>
      </Modal>
    </>
  )
}

UserInfo.displayName = 'DolanUserInfo'
export default UserInfo
