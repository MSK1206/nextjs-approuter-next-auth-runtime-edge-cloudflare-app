import Image from 'next/image';
import Form from './Form';
import Card from './Card';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/route';


export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {session ? <Card user={session.user?.name} /> : <Form />}
    </main>
  );
}
