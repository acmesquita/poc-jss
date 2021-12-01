import React from 'react'
import { JssProvider } from 'react-jss'

const generateId = (rule) => `prisma-${rule.key}-${Math.floor(Math.random() * 5000)}`

export const ConfigProvider = ({ children }) => <JssProvider generateId={generateId}>{children}</JssProvider>
