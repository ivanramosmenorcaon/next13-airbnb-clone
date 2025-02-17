import {  Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import getCurrentUser from './actions/getCurrentUser';
import getCategories from './actions/getCategories';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  const categories= await getCategories({ language: "es" });
  return (
    <html lang="en">
      <body className={font.className}>
        <>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} categories={categories} />
        </>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
