import { Header } from '../componenths/firstPage/Header';
import { FirstMain } from '../componenths/firstPage/FirstMain';
import { SecondMain } from '../componenths/firstPage/SecondMain';
import { ThreeMain } from '../componenths/firstPage/ThreeMain';
import { Footer } from '../componenths/firstPage/Footer';
import { ToggleWindowClick } from '../StoreOpen/WindowOpen';

export const Home = () => {
  return (
    <>
      <Header />
      <ToggleWindowClick />
      <FirstMain />
      <SecondMain />
      <ThreeMain />
      <Footer />
    </>
  );
};
