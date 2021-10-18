import {
  FC,
  ReactNode
} from 'react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import { locales } from '~/i18n'
import { Popover } from '@geist-ui/react'
import { TranslateIcon } from '@heroicons/react/outline'

import NavItem from './NavItem'

const LocaleSwitcher: FC<unknown> = () => {
  const {
    t,
    lang
  } = useTranslation('locales')

  const handleChangeLocale = async (locale: string): Promise<void> => {
    await setLanguage(locale)
  }

  const localeSelector = (): ReactNode => {
    return (
      <>
        {locales.map((locale) => (
          <Popover.Item
            onClick={locale !== lang && (async () => await handleChangeLocale(locale))}
            key={locale}
          >
            <span className={`${locale !== lang ? 'cursor-pointer' : ''} ${locale === lang ? 'text-blue-300' : ''}`}>
              {t(locale)}
            </span>
          </Popover.Item>
        ))}
      </>
    )
  }

  return (
    <Popover content={localeSelector} >
      <NavItem className="!p-3">
        <TranslateIcon className="w-6 h-6" />
      </NavItem>
    </Popover>
  )
}

LocaleSwitcher.displayName = 'DolanLocaleSwitcher'
export default LocaleSwitcher
