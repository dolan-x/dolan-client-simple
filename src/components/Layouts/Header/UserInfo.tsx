import { FC } from 'react'
import {
  Modal,
  Input,
  useModal
} from '@geist-ui/react'
import { UserIcon } from '@heroicons/react/outline'

import LoginForm from '@/components/Layouts/LoginForm'

const UserInfo: FC<unknown> = () => {
  const {
    visible,
    setVisible,
    bindings
  } = useModal()
  const handleOnLogin = (userName: string, password: string): void => {
    console.log(userName, password)
  }
  const handleOnCancel = () => setVisible(false)

  return (
    <>
      <div
        className="flex items-center cursor-pointer mx-3"
        onClick={() => setVisible(true)}
      >
        <UserIcon className="w-6 h-6" />
      </div>
      <Modal {...bindings}>
        <LoginForm
          onLogin={handleOnLogin}
          onCancel={handleOnCancel}
        />
      </Modal>
    </>
  )
}

UserInfo.displayName = 'DolanUserInfo'
export default UserInfo
