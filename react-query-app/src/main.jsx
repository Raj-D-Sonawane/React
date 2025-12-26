
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryclient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient} >
    <App />
  </QueryClientProvider >
)
