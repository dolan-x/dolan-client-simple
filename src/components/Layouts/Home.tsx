import { FC, PropsWithChildren } from 'react'

type HomeProps = {
}
type HomePropsWithChildren = PropsWithChildren<HomeProps>
const Home: FC<HomePropsWithChildren> = ({ children }: HomePropsWithChildren) => {
  return (
    <div>
      <main className="w-full min-h-main h-auto mx-auto pt-20 px-5 lg:(w-home px-1)">
        {children}
      </main>
    </div>
  )
}

Home.displayName = 'DolanHomeLayout'
export default Home
