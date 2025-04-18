"use client"

import { CardFooter } from "@/components/ui/card"

import type React from "react"

import { useState } from "react"
import { AlertCircle, CheckCircle, Lock, User } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AccountSecurityLoginProps {
  accountName: string
  hasBreaches: boolean
  onLogin: (username: string, password: string) => boolean
}

export default function AccountSecurityLogin({ accountName, hasBreaches, onLogin }: AccountSecurityLoginProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginStatus, setLoginStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const isValid = onLogin(username, password)
    setLoginStatus(isValid ? "success" : "error")
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-4">
      {hasBreaches && (
        <Alert variant="destructive" className="border-red-300 bg-red-50 text-red-800 animate-fadeIn">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-700 font-medium text-base">Security Alert</AlertTitle>
          <AlertDescription className="text-red-700">
            Your account credentials have been compromised. We suggest you change your password.
          </AlertDescription>
        </Alert>
      )}

      <Card className="border-none shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 z-0 opacity-70" />

        <div className="relative z-10">
          <CardHeader className="space-y-1 pb-6 pt-8">
            <div className="w-16 h-16 rounded-full bg-purple-100 mx-auto mb-4 flex items-center justify-center">
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">Welcome Back</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Sign in to your {accountName} account
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Username
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>
              </div>

              {loginStatus === "success" && (
                <Alert className="bg-green-50 text-green-800 border-green-200 animate-fadeIn">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertTitle className="font-medium text-green-700">Success</AlertTitle>
                  <AlertDescription className="text-green-700">Login Successful!</AlertDescription>
                </Alert>
              )}

              {loginStatus === "error" && (
                <Alert variant="destructive" className="animate-fadeIn">
                  <AlertCircle className="h-5 w-5" />
                  <AlertTitle className="font-medium">Error</AlertTitle>
                  <AlertDescription>Invalid Credentials</AlertDescription>
                </Alert>
              )}
            </CardContent>

            <CardFooter className="pb-8">
              <Button
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-base font-medium"
              >
                Login
              </Button>
            </CardFooter>
          </form>
        </div>
      </Card>
    </div>
  )
}
