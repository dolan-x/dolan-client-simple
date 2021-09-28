import { FC } from 'react'
import { useTranslation } from 'next-i18next'

import Widget from '.'
import TagCloud from '@/components/TagCloud'

import { Tag } from '@/lib/types'

interface TagCloudWidgetProps {
  tags: Tag[]
}
const TagCloudWidget: FC<TagCloudWidgetProps> = ({ tags }: TagCloudWidgetProps) => {
  const { t } = useTranslation('widgets')

  return (
    <Widget>
      <Widget.Title>
        {t('tags')}
      </Widget.Title>
      <TagCloud tags={tags} />
    </Widget>
  )
}

export default TagCloudWidget
