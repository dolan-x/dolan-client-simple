import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Widget from '.'
import TagCloud from '@/components/TagCloud'

import { Tag } from '@/lib/types'

type TagCloudWidgetProps = {
  tags: Tag[]
}
const TagCloudWidget: FC<TagCloudWidgetProps> = ({ tags }) => {
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
