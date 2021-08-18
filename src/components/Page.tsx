import { ReactNode, FC } from 'react'

type PageProps = {
  children: ReactNode
}

const Page: FC<PageProps> = ({ children }: PageProps) => {
  return (
    <div>
      <main className="w-full min-h-main lg:w-page h-auto mx-auto pt-24 px-5">
        {children}
      </main>
    </div>
  )
}

export default Page
