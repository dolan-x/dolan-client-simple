import { FC } from 'react'
import { Card, Text, CardProps } from '@geist-ui/react'

type WidgetTitleProps = {
  children: string
}
const WidgetTitle: FC<WidgetTitleProps> = ({ children }:WidgetTitleProps) => {
  return (
    <Text className="text-widget-title text-sm mb-2 tracking-widest uppercase">
      {children}
    </Text>
  )
}

type WidgetProps = CardProps
const Widget: FC<WidgetProps> = ({ className = '', children, ...props }: WidgetProps) => {
  return (
    <Card
      className={`mt-4 first:mt-0 ${className}`}
      {...props}
    >
      {children}
    </Card>
  )
}
type WidgetComponentType = typeof Card & {
  Title: typeof WidgetTitle
  Content: typeof Card.Content
  Footer: typeof Card.Footer
}
;(Widget as WidgetComponentType).Title = WidgetTitle
;(Widget as WidgetComponentType).Content = Card.Content
;(Widget as WidgetComponentType).Footer = Card.Footer

Widget.displayName = 'DolanWidget'
export default Widget as WidgetComponentType
