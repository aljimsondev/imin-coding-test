import Footer from '@/components/footer';
import Header from '@/components/header';
import ProductSnippet from '@/components/product/snippet';

export default function Home() {
  return (
    <main className="main">
      <Header />
      <ProductSnippet />
      <Footer />
    </main>
  );
}
