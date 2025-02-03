import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';
import Provider from './Provider';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className='mt-20'>
        
          </header>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
