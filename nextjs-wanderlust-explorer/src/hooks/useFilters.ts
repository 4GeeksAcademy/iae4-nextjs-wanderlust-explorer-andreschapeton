'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { experiences, Experience } from '@/data/experiences';

export const ALL = 'All';
export const CATEGORIES: Experience['category'][] = ['Adventure', 'Culture', 'Food', 'Wellness', 'Nature'];
export const DESTINATIONS: string[] = Array.from(
  new Set(
    experiences.flatMap(exp => [
      exp.destination,
      ...exp.destination.split(',').map(part => part.trim()),
    ]),
  ),
).sort();

// Escapa caracteres especiales para que términos como "(" no rompan el RegExp
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function useFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Los valores se leen de la URL, así que se prerrellenan al abrir o recargar con query params
  const urlSearch = searchParams.get('search') ?? '';
  const urlCategory = searchParams.get('category');
  const category = CATEGORIES.find(value => value.toLocaleLowerCase() === urlCategory?.toLocaleLowerCase()) ?? ALL;
  const urlDestination = searchParams.get('destination');
  const destination = DESTINATIONS.find(value => value.toLocaleLowerCase() === urlDestination?.toLocaleLowerCase()) ?? ALL;

  // El input de búsqueda usa estado local para que escribir sea fluido; se sincroniza con la URL con debounce
  const [searchState, setSearchState] = useState({ source: urlSearch, value: urlSearch });
  if (searchState.source !== urlSearch) {
    setSearchState({ source: urlSearch, value: urlSearch });
  }
  const searchTerm = searchState.value;
  const setSearchTerm = (value: string) => setSearchState({ source: urlSearch, value });

  const replaceParams = (params: URLSearchParams) => {
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  useEffect(() => {
    if (searchTerm === urlSearch) return;
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchTerm) params.set('search', searchTerm);
      else params.delete('search');
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchTerm, urlSearch, searchParams, pathname, router]);

  const setFilter = (key: 'category' | 'destination', value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== ALL) params.set(key, value);
    else params.delete(key);
    replaceParams(params);
  };

  const clearFilters = () => {
    setSearchTerm('');
    replaceParams(new URLSearchParams());
  };

  const filteredExperiences = useMemo(() => {
    const regex = new RegExp(escapeRegExp(searchTerm.trim()), 'i');
    return experiences.filter(exp => {
      const matchesSearch = regex.test(exp.title);
      const matchesCategory = category === ALL || exp.category === category;
      const matchesDestination = destination === ALL || exp.destination
        .split(',')
        .map(part => part.trim().toLocaleLowerCase())
        .includes(destination.toLocaleLowerCase()) || exp.destination.toLocaleLowerCase() === destination.toLocaleLowerCase();
      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [searchTerm, category, destination]);

  const returnParams = new URLSearchParams();
  if (searchTerm.trim()) returnParams.set('search', searchTerm.trim());
  if (category !== ALL) returnParams.set('category', category);
  if (destination !== ALL) returnParams.set('destination', destination);
  const returnQuery = returnParams.toString();
  const returnHref = returnQuery ? `/experiences?${returnQuery}` : '/experiences';

  return {
    searchTerm,
    setSearchTerm,
    category,
    setCategory: (value: string) => setFilter('category', value),
    destination,
    setDestination: (value: string) => setFilter('destination', value),
    clearFilters,
    filteredExperiences,
    returnHref,
  };
}
