import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="w-screen min-h-screen bg-white flex justify-center items-center">
      <SignUp />
    </div>
  );
}
