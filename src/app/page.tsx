import Image from 'next/image';
import Form from './Form';
import Card from './Card';
import { getServerSession } from 'next-auth';
import { AUTHCONFIG } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(AUTHCONFIG);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {session ? <Card user={session.user?.name} /> : <Form />}
    </main>
  );
}
