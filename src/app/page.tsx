import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-bold text-xl">Next SaaS Kit</span>
          <Link href="/login">
            <Button variant="outline" size="sm">Sign in</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold max-w-2xl tracking-tight">
          Your Next SaaS<br />
          <span className="text-muted-foreground">Starter Kit</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-md">
          Authentication, payments, admin panel, and more. Built with Next.js, Prisma, and Stripe.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/login">
            <Button size="lg">Get started</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg">Learn more</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
