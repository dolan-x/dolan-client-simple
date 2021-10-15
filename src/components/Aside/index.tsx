import {
  FC,
  Fragment
} from 'react'

import widgetMetas from '@/meta/asideWidgets'

import toast from '@/lib/common/toast'

type AsideProps = {
  widgetIDs: string[]
}
const Aside: FC<AsideProps> = ({ widgetIDs }) => {
  return (
    <aside className="flex flex-col w-full lg:w-aside">
      {widgetIDs.map((widgetID) => {
        const widgetMeta = widgetMetas.find((widgetMeta) => widgetMeta.id === widgetID)
        if (widgetMeta === undefined) {
          toast('error', { text: `Couldn't find widget(${widgetID})` })
          return null
        }
        return (
          <Fragment key={widgetMeta.id}>
            {widgetMeta.component}
          </Fragment>
        )
      })}
    </aside>
  )
}

Aside.displayName = 'DolanSideBar'
export default Aside
