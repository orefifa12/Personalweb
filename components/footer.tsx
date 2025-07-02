import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-lg font-semibold">
              John Doe
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">© {currentYear} David Boham. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
