'use client';

// App
import { SearchProvider } from '@/app/context/SearchContext';
import { List } from '@/app/components/card/List';
import { MainHeader } from '@/app/components/header/MainHeader';
import { Search } from '@/app/components/search/Search';

// Data
import { advocates } from '@/db/schema';
import { InferSelectModel } from 'drizzle-orm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type Advocate = InferSelectModel<typeof advocates>;
export type AdvocateList = Array<Advocate>;

const queryClient = new QueryClient();

export default function Home() {
  return (
    <SearchProvider>
      <QueryClientProvider client={queryClient}>
        <main className={'m-auto flex max-w-220 flex-col p-4'}>
          <MainHeader />
          <Search />
          <List />
        </main>
      </QueryClientProvider>
    </SearchProvider>
  );
}
