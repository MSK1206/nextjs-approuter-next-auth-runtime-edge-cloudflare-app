import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import type { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      httpOptions: {
        timeout: 50000,
      },
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
