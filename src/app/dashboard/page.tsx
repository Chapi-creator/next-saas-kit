import { auth, signOut } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) redirect("/login")

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/login" })
            }}
          >
            <Button type="submit" variant="outline">Sign out</Button>
          </form>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
              <CardDescription>{session.user.name || session.user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              {session.user.image && (
                <img src={session.user.image} alt="" className="w-16 h-16 rounded-full" />
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Total registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Plan</CardTitle>
              <CardDescription>Current subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">Free</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
