import { useRouter } from 'next/router';

const DynamicPage = () => {
  const { query } = useRouter();
  return <div>{`Collections : ${JSON.stringify(query || '')}`}</div>;
};

export default DynamicPage;
