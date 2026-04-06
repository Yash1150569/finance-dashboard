import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { DashboardOverview } from './components/DashboardOverview';
import { Transactions } from './components/Transactions';
import { Insights } from './components/Insights';
import { RoleSelector } from './components/RoleSelector';
import { useFinanceData } from './hooks/useFinanceData';
import './index.css';

function App() {
  const [currentRole
