import { FC } from 'react'
import { Card, Text, CardProps } from '@geist-ui/react'

type WidgetTitleProps = {
  children: string
}
const WidgetTitle: FC<WidgetTitleProps> = ({ children }: WidgetTitleProps) => {
  return (
    <Text className="text-widget-title text-sm mb-2 tracking-widest uppercase">
      {children}
    </Text>
  )
}

type WidgetProps = CardProps & {
  sticky?: boolean
}
const Widget: FC<WidgetProps> = ({ className = '', children, sticky = false, ...props }: WidgetProps) => {
  return (
    <Card
      className={`mb-4 shadow-widget rounded-lg border-none ${sticky ? 'sticky' : ''} ${className}`}
      {...props}
    >
      {children}
    </Card>
  )
}
type WidgetComponentType = typeof Widget & {
  Title: typeof WidgetTitle
  Content: typeof Card.Content
  Footer: typeof Card.Footer
}
;(Widget as WidgetComponentType).Title = WidgetTitle
;(Widget as WidgetComponentType).Content = Card.Content
;(Widget as WidgetComponentType).Footer = Card.Footer

Widget.displayName = 'DolanWidget'
export default Widget as WidgetComponentType
