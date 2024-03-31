import { GlobalStyles } from "@/styles/global"

type ProvidersProps = {
  children: React.ReactNode

}
export function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
