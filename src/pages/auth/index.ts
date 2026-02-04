import { lazy } from 'react';
import { LoadComponent } from '@/shared/components/load-component';

export const AuthPage = LoadComponent(lazy(async () => import('@/pages/auth/page')));
