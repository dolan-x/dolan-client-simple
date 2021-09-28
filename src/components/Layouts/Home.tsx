import { FC, PropsWithChildren } from 'react'

interface HomeProps {
}
type HomePropsWithChildren = PropsWithChildren<HomeProps>
const Home: FC<HomePropsWithChildren> = ({ children }: HomePropsWithChildren) => {
  return (
    <div>
      <main className="w-full min-h-main lg:w-home h-auto mx-auto pt-20 px-5 lg:px-10">
        {children}
      </main>
    </div>
  )
}

Home.displayName = 'DolanHomeLayout'
export default Home
