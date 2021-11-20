import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Widget from '..'
import CategoryItem from './CategoryItem'

import { Category } from '@/lib/types'

type CategoriesWidgetProps = {
  categories: Category[]
}
const CategoriesWidget: FC<CategoriesWidgetProps> = ({ categories }) => {
  const { t } = useTranslation('widgets')

  return (
    <Widget>
      <Widget.Title>
        {t('categories')}
      </Widget.Title>
      {categories.map((category) => (
        <CategoryItem
          name={category.name}
          count={category.count}
          key={category.name}
        />
      ))}
    </Widget>
  )
}

export default CategoriesWidget
