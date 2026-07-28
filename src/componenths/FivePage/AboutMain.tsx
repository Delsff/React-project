import { useEffect, useRef } from 'react';

export const AboutMain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.scroll-anim');
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px',
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const books = [
    {
      id: 1,
      img: '/imgAboutus/book1.png',
      title: 'All Benefits of PLUS',
      price: '$24',
      delay: 'delay-1',
    },
    {
      id: 2,
      img: '/imgAboutus/book2.png',
      title: 'All Benefits of PLUS',
      price: '$24',
      delay: 'delay-2',
    },
    {
      id: 3,
      img: '/imgAboutus/book3.png',
      title: 'All Benefits of PLUS',
      price: '$24',
      delay: 'delay-3',
    },
    {
      id: 4,
      img: '/imgAboutus/book4.png',
      title: 'All Benefits of PLUS',
      price: '$24',
      delay: 'delay-1',
    },
    {
      id: 5,
      img: '/imgAboutus/book5.png',
      title: 'All Benefits of PLUS',
      price: '$24',
      delay: 'delay-2',
    },
    {
      id: 6,
      img: '/imgAboutus/book6.png',
      title: 'All Benefits of PLUS',
      price: '$24',
      delay: 'delay-3',
    },
  ];

  return (
    <>
      <style>{`
        .scroll-anim {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-anim.delay-1.active { transition-delay: 0.08s; }
        .scroll-anim.delay-2.active { transition-delay: 0.16s; }
        .scroll-anim.delay-3.active { transition-delay: 0.24s; }
      `}</style>
      <main ref={containerRef} className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <h1 className='scroll-anim text-[26px] sm:text-[30px] font-medium font-[Poppins] mt-5 mb-8 text-[#252641]'>
          Literature course
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {books.map((book) => (
            <div
              key={book.id}
              className={`scroll-anim ${book.delay} w-full max-w-[420px] lg:max-w-[483px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between`}
            >
              <div className='w-full overflow-hidden'>
                <img
                  src={book.img}
                  alt={book.title}
                  className='w-full h-auto object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='flex justify-between items-center p-6 bg-white'>
                <p className='text-[20px] sm:text-[25px] font-medium text-[#252641] font-[Poppins]'>
                  {book.title}
                </p>
                <span className='text-[#49BBBD] text-[24px] sm:text-[30px] font-bold font-[Poppins]'>
                  {book.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='scroll-anim delay-2 flex justify-center mt-16'>
          <img
            src='/imgAboutus/pag.png'
            alt='pagination'
            className='cursor-pointer hover:opacity-80 transition-opacity'
          />
        </div>
      </main>
    </>
  );
};
