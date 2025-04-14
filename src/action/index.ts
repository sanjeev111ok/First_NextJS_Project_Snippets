"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  })
  redirect(`/snippet/${id}`)
}
export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id },
  })
  redirect("/")
}
export async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title")
    const code = formData.get("code")
    if (typeof title !== "string" || title.length < 4) {
      return { message: "Title is required and most be more than 3 charactes" }
    }
    if (typeof code !== "string" || code.length < 8) {
      return { message: "Code is required and most be longer " }
    }

    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    })
    throw new Error("Oops! Something went wrong.")
  } catch (error: any) {
    return { message: error.message }
  }

  redirect("/")
}
