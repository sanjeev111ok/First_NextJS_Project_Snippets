"use client"
type ErrorPageProps = {
  error: Error
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  return <div>{error.message}</div>
}

export default ErrorPage
