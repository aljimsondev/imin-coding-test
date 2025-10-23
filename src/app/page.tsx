import Footer from '@/components/footer';
import Header from '@/components/header';
import ProductSnippet from '@/components/snippet/product.snippet';

export default function Home() {
  return (
    <main className="main">
      <Header />
      <ProductSnippet />
      <Footer />
    </main>
  );
}
