import { signIn } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Next SaaS Kit</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form
            action={async () => {
              "use server"
              await signIn("github", { redirectTo: "/dashboard" })
            }}
          >
            <Button type="submit" className="w-full">
              Sign in with GitHub
            </Button>
          </form>
          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/dashboard" })
            }}
          >
            <Button type="submit" variant="outline" className="w-full">
              Sign in with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
