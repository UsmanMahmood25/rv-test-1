"use client";

import { useEffect } from 'react';

export function useDocumentTitle(title: string | undefined): void {
    useEffect(() => {
      document.title = title || 'ReVOLT';
    }, [title]);
  }
  