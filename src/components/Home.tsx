import { ReactNode, FC } from 'react'

type ContentProps = {
  children: ReactNode
}

const Content: FC<ContentProps> = ({ children }: ContentProps) => {
  return (
    <div>
      <main className="w-full min-h-main lg:w-home h-auto mx-auto pt-0 lg:pt-20 px-5 lg:px-10">
        {children}
      </main>
    </div>
  )
}

export default Content
