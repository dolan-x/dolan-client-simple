import {
  FC,
  PropsWithChildren
} from 'react'

type PageProps = {
}
type PagePropsWithChildren = PropsWithChildren<PageProps>
const Page: FC<PagePropsWithChildren> = ({ children }) => {
  return (
    <div>
      <main className="w-full min-h-main lg:w-page h-auto mx-auto pt-24 px-5">
        {children}
      </main>
    </div>
  )
}

Page.displayName = 'DolanPageLayout'
export default Page
