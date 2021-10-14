import {
  FC,
  ReactNode
} from 'react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import { locales } from '../../../../i18n'

import {
  Popover,
  Select
} from '@geist-ui/react'
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

  const localeSwitcherDropdown = (): ReactNode => (
    <Popover.Item>
      <Select
        initialValue={lang}
        onChange={handleChangeLocale}
        type="success"
      >
        {locales.map((locale) => (
          <Select.Option
            value={locale}
            key={locale}
          >
            {t(locale)}
          </Select.Option>
        ))}
      </Select>
    </Popover.Item>
  )

  return (
    <Popover
      content={localeSwitcherDropdown}
      placement="bottomEnd"
    >
      <NavItem className="!p-1">
        <TranslateIcon className="w-6 h-6" />
      </NavItem>
    </Popover>
  )
}

LocaleSwitcher.displayName = 'DolanLocaleSwitcher'
export default LocaleSwitcher
