# Account-Security-and-Validation

This project is a simple and elegant login interface built using **Next.js** and **React**, featuring custom UI components and security feedback for users. It includes support for breach warnings, form validation, and visual feedback on login status.

---

## Features

- Modern UI with Tailwind CSS & Lucide Icons
- Login form with username and password fields
- Breach warnings when applicable
- Login success & error alerts
- Fully customizable and reusable component

---

## File Structure

### `page.tsx`

Top-level page component responsible for rendering the login interface.

```tsx
<AccountSecurityLogin
  accountName="Example"
  hasBreaches={false}
  onLogin={handleLogin}
/>
```

## Credentials

```sh
username=test
password=password
```

## Build With

- Next.js
- React
- Tailwind CSS
- Lucide Icons
- ShadCN UI

## Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/aniqjaved01/Account-Security-and-Validation.git
cd Account-Security-and-Validation
```

2. **Install Dependencies**
```bash
npm install --force
```

3. **Run Developmental Server**
```bash
npm run dev
```

3. **Open Server**
```bash
Visit: http://localhost:3000
```

## Testing Login

To test the login feature, use the following credentials:

- Username: test

- Password: password

Using any other credentials will show an "Invalid Credentials" error.

To simulate a compromised account, pass ``` hasBreaches={true} ``` to the component.

