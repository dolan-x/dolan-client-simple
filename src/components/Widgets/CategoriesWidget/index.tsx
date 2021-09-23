import { FC } from 'react'
import { useTranslation } from 'next-i18next'

import Widget from '..'
import CategoryItem from './CategoryItem'

import { Category } from '@/lib/types'

type CategoriesWidgetProps = {
  categories: Category[]
}
const TagCloudWidget: FC<CategoriesWidgetProps> = ({ categories }: CategoriesWidgetProps) => {
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

export default TagCloudWidget
