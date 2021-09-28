import { ReactNode } from 'react'
import { toast as _toast, ToastPosition, ToastOptions } from 'react-toastify'

type Toasts = 'default' | 'success' | 'error' | 'warn' | 'info'
const defaultToastType = 'default' as Toasts
type ToastType = Toasts & typeof defaultToastType
const defaultOptions: ToastOptions = {
  position: 'bottom-right' as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined
}
type OptionsWithDefault = ToastOptions & typeof defaultOptions
type ToastOptionsType = {
  text: ReactNode
  options?: OptionsWithDefault
}
const toasts = {
  default: _toast,
  success: _toast.success,
  error: _toast.error,
  warn: _toast.warn,
  info: _toast.info
}
const toast = (type: ToastType, { text, ...options }: ToastOptionsType): void => {
  toasts[type](text, {
    ...defaultOptions,
    ...options
  })
}

export default toast
