import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
        <div className="mt-4 rounded-lg bg-yellow-200 p-4 shadow-md">
          <h3 className="mb-2 font-semibold text-black">Use these details to login !</h3>
          <p className="text-sm text-black">
            <strong>Email:</strong> user@nextmail.com<br />
            <strong>Password:</strong> 123456
          </p>
        </div>
      </div>
    </main>
  );
}