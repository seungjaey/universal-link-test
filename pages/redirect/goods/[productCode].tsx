import { useRouter } from 'next/router';

const DynamicPage = () => {
    const { query, replace } = useRouter();
    const { productCode } = query;
    replace(`/goods/${productCode}`)
    return null;
};

export default DynamicPage;
