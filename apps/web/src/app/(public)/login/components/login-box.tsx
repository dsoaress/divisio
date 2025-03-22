import { Button } from '@/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'

import { AppleLogo } from './apple-logo'
import { GoogleLogo } from './google-logo'

export function LoginBox(): React.JSX.Element {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>Login with your Apple or Google account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="flex flex-col gap-4">
            <Button variant="outline" className="w-full" disabled>
              <AppleLogo />
              Login with Apple
            </Button>
            <a href="/api/sessions/login-google">
              <Button variant="outline" className="w-full">
                <GoogleLogo />
                Login with Google
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
