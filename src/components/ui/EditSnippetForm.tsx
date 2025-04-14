"use client"
import { Editor } from "@monaco-editor/react"
import type { Snippet } from "@/generated/prisma"
import { useState } from "react"
import { Button } from "./button"
import { saveSnippet } from "@/action"

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code)

  const handleEditorChange = (value: string = "") => {
    setCode(value)
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg space-y-4 border border-gray-700">
      <h1 className="text-2xl font-semibold text-white">Your Code Editor</h1>
      <form action={saveSnippetAction} className="flex justify-end">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Save
        </Button>
      </form>
      <div className="rounded-lg overflow-hidden ring-1 ring-gray-700">
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      </div>
    </div>
  )
}

export default EditSnippetForm
