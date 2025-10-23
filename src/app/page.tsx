import Footer from '@/components/footer';
import Header from '@/components/header';
import ProductSnippet from '@/components/snippet/product.snippet';
import AppStoreProvider from '@/store';

export default function Home() {
  return (
    <main className="main">
      <AppStoreProvider>
        <Header />
        <ProductSnippet />
        <Footer />
      </AppStoreProvider>
    </main>
  );
}
