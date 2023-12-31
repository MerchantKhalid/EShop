import Image from 'next/image';
import Container from './component/Container';
import HomeBanner from './component/HomeBanner';

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <HomeBanner />
      </Container>
    </div>
  );
}
