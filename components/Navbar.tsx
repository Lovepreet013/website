import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background tracking-tight border-b border-gray-200">
      <div className="flex h-16 items-center justify-between max-w-5xl mx-auto p-8">
        <Link href="#" prefetch={false}>
          <span className="text-md font-medium">LOVEPREET SINGH</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/#about" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/#projects" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link
                href="/#about"
                className="flex items-center gap-2 text-md font-medium hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="flex items-center gap-2 text-md font-medium hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="flex items-center gap-2 text-md font-medium hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>

  )
}

function MenuIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}