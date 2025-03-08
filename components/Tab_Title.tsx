"use client";

import { useEffect } from 'react';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    if (title) {
      document.title = title; // Now it actually updates
    }
  }, [title]);
}