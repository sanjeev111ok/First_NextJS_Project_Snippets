"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import React, { useActionState } from "react"
import * as actions from "@/action"

export default function CreateSnippetPage() {
  const [formStateData, action] = useActionState(actions.createSnippet, {
    message: "",
  })

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Create a New Snippet
      </h1>
      <form action={action} className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="title"
            className="text-lg font-medium text-zinc-800 dark:text-zinc-100"
          >
            Title
          </Label>
          <Input
            name="title"
            type="text"
            id="title"
            placeholder="Enter your snippet title"
            className="rounded-xl border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="code"
            className="text-lg font-medium text-zinc-800 dark:text-zinc-100"
          >
            Code
          </Label>
          <Textarea
            name="code"
            id="code"
            placeholder="Paste your code here..."
            className="min-h-[200px] rounded-xl border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {formStateData.message && (
          <div className="p-2 bg-red-300 border-2 border-red-600">
            {formStateData.message}
          </div>
        )}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110 shadow-md transition-all duration-300 rounded-xl"
        >
          Create Snippet
        </Button>
      </form>
    </div>
  )
}
