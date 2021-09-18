import { FC } from 'react'
import { useTranslation } from 'next-i18next'

import Widget from '..'
import CategoryItem from './CategoryItem'

type CategoriesWidgetProps = {
  categories: string[]
}
const TagCloudWidget: FC<CategoriesWidgetProps> = ({ categories }: CategoriesWidgetProps) => {
  const { t } = useTranslation('categories')

  return (
    <Widget>
      <Widget.Title>
        {t('categories')}
      </Widget.Title>
      {categories.map((category) => (
        <CategoryItem
          name={category}
          key={category}
        />
      ))}
    </Widget>
  )
}

export default TagCloudWidget
