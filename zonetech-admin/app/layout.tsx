// Componente do Servidor

import './globals.css'

import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from "@clerk/localizations";

import { ModalProvider } from '@/providers/modalProvider';
import { ToasterProvider } from '@/providers/toastProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZoneTech-ADMIN',
  description: 'Dashboard para controlar o funcionamento das lojas.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider localization={ptBR}>
        <html lang="pt-BR">
          <body className={inter.className}>
            <ToasterProvider />
            <ModalProvider />
            {children}
          </body>
        </html>
    </ClerkProvider>
  )
}
