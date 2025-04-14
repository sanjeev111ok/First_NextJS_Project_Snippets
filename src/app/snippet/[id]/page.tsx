import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import React from "react"
import Link from "next/link"
import { deleteSnippet } from "@/action"

const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const id = parseInt((await params).id)
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  })

  if (!snippet) {
    return (
      <div className="text-center py-10 text-2xl font-semibold text-red-500">
        Snippet not found
      </div>
    )
  }
  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id)
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl">
      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
            {snippet.title}
          </h1>

          <div className="bg-zinc-800 text-white p-8 rounded-xl shadow-2xl overflow-x-auto whitespace-pre-wrap font-mono text-lg">
            <pre className="code-container">
              <code>{snippet.code}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:brightness-110 px-8 py-4 rounded-lg transition-all">
              Edit
            </Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button
              variant="destructive"
              className="border border-red-500 text-red-500 hover:bg-red-50 px-8 py-4 rounded-lg transition-all"
              type="submit"
            >
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SnippetDetailPage
