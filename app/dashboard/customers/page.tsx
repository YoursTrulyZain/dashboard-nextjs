import React from 'react'
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;
  const query = typeof params?.query === 'string' ? params.query : '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <CustomersTable customers={customers} />
  );
}
