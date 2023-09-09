'use client';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { PET_API } from '@/constants/api/petEndpoints';
import { get } from '@/helpers/api_helpers';
import Archive from '@/components/Archive';

const Cats = () => {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);
  const [trigger, { toggle }] = useDisclosure(false);

  useEffect(() => {
    const getAllPets = async () => {
      cats?.length === 0 && setLoading(true);
      const response = await get(PET_API.get_all_cat());
      setCats(response);
      setLoading(false);
    };
    getAllPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return <Archive pets={cats} loading={loading} trigger={toggle} />;
};

export default Cats;
