import Footer from '@/components/footer';
import Header from '@/components/header';
import ProductSnippet from '@/components/snippet/product.snippet';
import AppProvider from '@/store';

export default function Home() {
  return (
    <main className="main">
      <AppProvider>
        <Header />
        <ProductSnippet />
        <Footer />
      </AppProvider>
    </main>
  );
}
