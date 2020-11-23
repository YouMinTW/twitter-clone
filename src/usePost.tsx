import { useQuery } from '@apollo/client/react/hooks/useQuery';
import gql from 'graphql-tag';
export type post = {
  content: string;
  image_url: string;
  member: {
    account_name: string;
    avatar_url: string;
    name: string;
    verified: boolean;
  };
};
type postData = { post: post[] };

export const usePost = () => {
  const { loading, error, data, refetch } = useQuery<postData>(gql`
    query MyQuery {
      post {
        content
        image_url
        member {
          account_name
          avatar_url
          name
          verified
        }
      }
    }
  `);

  return { loading, error, data, refetch };
};
