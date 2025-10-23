import Footer from '@/components/footer';
import Header from '@/components/header';
import ProductSnippet from '@/components/snippet/product.snippet';
import QueryProvider from '@/provider/query.provider';
import AppStoreProvider from '@/store';

export default function Home() {
  return (
    <main className="main">
      <QueryProvider>
        <AppStoreProvider>
          <Header />
          <ProductSnippet />
          <Footer />
        </AppStoreProvider>
      </QueryProvider>
    </main>
  );
}
