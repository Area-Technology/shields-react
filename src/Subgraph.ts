import { request, gql } from 'graphql-request';
import { useState, useEffect } from 'react';
const GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/johncpalmer/shields';

export type GraphShield = {
  id: string;
  built: boolean;
  svg?: string;
};

export const getShield = async (tokenId: string) => {
  const res = await request<{
    token?: GraphShield;
  }>(
    GRAPH_URL,
    gql`
  query {
    token(id: "${tokenId}") {
      id
      built
      svg
    }
  }
`
  );
  return res.token;
};

export const useShield = (shieldId: number) => {
  const [shield, setShield] = useState<GraphShield>();
  useEffect(() => {
    getShield(shieldId.toString()).then(setShield);
  }, [shieldId]);
  return shield;
};
