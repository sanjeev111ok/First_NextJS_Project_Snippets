import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function Home() {
  const snippets = await prisma.snippet.findMany()
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-bold text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Snippet Hub
      </h1>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">All Snippets</h2>
        <Link href="./snippet/new">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110 shadow-md transition duration-300"
          >
            + New Snippet
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-100">
                {snippet.title}
              </h3>
            </div>
            <Link href={`./snippet/${snippet.id}`}>
              <Button variant="outline" className="hover:scale-105 transition text-white border-white">
                View
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
