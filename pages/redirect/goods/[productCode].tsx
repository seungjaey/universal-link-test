import { useRouter } from 'next/router';

const DynamicPage = () => {
    const { query, isReady, replace } = useRouter();
    const { productCode } = query;
    if (!isReady) {
        return null;
    }
    replace(`/goods/${productCode}`)
    return null;
};

export default DynamicPage;
