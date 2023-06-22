import Link from 'next/link';

const style = { marginBottom: '16px' };

const HomePage = () => {
  return (
    <div>
      <ul>
        <li style={style}>
          <Link href="/goods/5063110" passHref prefetch={false}>
            [1] 상품 상세 [5063110] 로 이동하기
          </Link>
        </li>
        <li style={style}>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/goods/5063110">[2] 상품 상세 [5063110] 로 이동하기</a>
        </li>
        <li style={style}>
          <a href="https://universal-link-test-beryl.vercel.app/goods/5063110">[3] 상품 상세 [5063110] 로 이동하기</a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
