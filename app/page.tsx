"use client"

import AccountSecurityLogin from "../account-security-login"

export default function Page() {
  const handleLogin = (username: string, password: string) => {
    // Replace with your actual authentication logic
    return username === "test" && password === "password"
  }

  return <AccountSecurityLogin accountName="Example" hasBreaches={false} onLogin={handleLogin} />
}
