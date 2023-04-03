import { useRouter } from 'next/router';

const DynamicPage = () => {
  const { query } = useRouter();
  return <div>{`Goods : ${JSON.stringify(query || '')}`}</div>;
};

export default DynamicPage;
