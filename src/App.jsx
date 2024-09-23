import Footer from './components/ui/Footer/Footer';
import { default as InstantAccess } from './components/ui/Header/InstantAccess';
import LeftNav from './components/ui/Header/LeftNav';
import RightNav from './components/ui/Header/RightNav';
import Landing from './components/ui/Welcome/Landing';

// NOTES:

// I regret to inform you that I was unable to complete the exam. I recognize that my strength lies more in logical problem-solving, which often leads me to spend additional time on design aspects. I faced difficulties in implementing the UI design, and I acknowledge this as a weakness in my skill set. Thank you for your understanding.

// Tech Used:
// HTML
// CSS
// JS | React
// SwiperJs *not implemented
// Tailwind

function App() {
  return (
    <main className="scale-75 flex flex-col items-center">
      <section className=" bg-black w-full ">
        <section className="flex justify-between w-full p-5">
          <LeftNav />
          <RightNav />
        </section>
        <section className="h-[100dvh] bg-black w-full grid ">
          <InstantAccess />
        </section>
      </section>
      <section className="flex mx-auto w-fulll justify-center  ">
        <Landing />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
