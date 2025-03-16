import { LoginBox } from './components/login-box'
import { LoginBoxFooter } from './components/login-box-footer'
import { LoginBoxHeader } from './components/login-box-header'

export default function LoginPage(): React.JSX.Element {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginBoxHeader />
        <div className="flex flex-col gap-6">
          <LoginBox />
          <LoginBoxFooter />
        </div>
      </div>
    </div>
  )
}
