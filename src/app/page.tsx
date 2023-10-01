import Image from 'next/image';
import Form from './Form';
import { getServerSession } from 'next-auth';
import { options } from './options';
import Card from './Card';



export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {
        session?<Card user={session.user?.name} />:<Form />
      }
    </main>
  );
}
