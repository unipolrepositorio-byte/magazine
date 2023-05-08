import Theme from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerComponent from './components/BannerComponent';
import MainContextProvider from './context/MainContextProvider';
import SectionComponent from './components/SectionComponent';
import AsideComponent from './components/AsideComponent';
import MainComponent from './components/MainComponent';
import ImageCarousel from './components/ImageCarousel';
import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import ArticlesComponent from './components/ArticlesComponent';
import BannerStaticComponent from './components/BannerStaticComponent';
import BanerContextProvider from './context/BanerContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        <BanerContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <BannerComponent />
                    <SectionComponent>
                      <MainComponent />
                      <AsideComponent />
                    </SectionComponent>
                    <ImageCarousel />
                    <NavbarComponent />
                  </>
                }
              />
              <Route
                path="/articles"
                element={
                  <>
                    <Header />
                    <BannerStaticComponent />
                    <ArticlesComponent />
                    <ImageCarousel />
                    <NavbarComponent />
                  </>
                }
              />
              <Route
                path="/volumes"
                element={
                  <>
                    <Header />
                    <BannerStaticComponent />
                  </>
                }
              />
              <Route path="/content/strapi" element={<></>} />
              <Route path="/register" element={<></>} />
            </Routes>
          </BrowserRouter>
        </BanerContextProvider>
      </MainContextProvider>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
