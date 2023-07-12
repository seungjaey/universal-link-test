import { useRouter } from 'next/router';
import {GetServerSideProps} from "next";

const DynamicPage = () => {
    const { query } = useRouter();

    return null;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { req } = ctx;
    console.log('check');
    return {
        props: {},
        redirect: {
            statusCode: 307,
            destination: `/goods/${ctx?.params?.productCode}`,
        }
    }
}

export default DynamicPage;
