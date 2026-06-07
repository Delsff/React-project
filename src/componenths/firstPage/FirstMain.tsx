import { useEffect, useRef } from 'react';

export const FirstMain: React.FC = () => {
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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .scroll-anim {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .scroll-anim.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-card-1 { transition-delay: 0.1s; }
        .delay-card-2 { transition-delay: 0.25s; }
        .delay-card-3 { transition-delay: 0.4s; }
      `}</style>
      <div
        ref={containerRef}
        className='w-full max-w-[1550px] overflow-x-hidden mx-auto pb-[100px] px-4 sm:px-6 lg:px-10'
      >
        <div className='scroll-anim flex justify-center flex-col mt-[100px] lg:mt-[200px] text-center'>
          <h1 className='text-[32px] lg:text-[45px] font-[700] font-bold'>Our Success</h1>
          <p className='font-[400] text-[16px] lg:text-[18px] mt-[10px] text-[#696984]'>
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
            nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
        <div className='scroll-anim flex flex-wrap justify-center gap-[20px] lg:gap-[40px] mt-[60px] lg:mt-[100px]'>
          <img src='/imgMain/Frame1.png' alt='img' className='h-12 lg:h-auto' />
          <img src='/imgMain/Frame2.png' alt='img' className='h-12 lg:h-auto' />
          <img src='/imgMain/Frame3.png' alt='img' className='h-12 lg:h-auto' />
          <img src='/imgMain/Frame4.png' alt='img' className='h-12 lg:h-auto' />
          <img src='/imgMain/Frame5.png' alt='img' className='h-12 lg:h-auto' />
        </div>
        <div className='scroll-anim flex justify-center flex-col mt-[100px] lg:mt-[200px] text-center'>
          <h1 className='text-[30px] lg:text-[40px] font-[700] font-bold text-[#49BBBD] flex gap-[12px] justify-center flex-wrap'>
            <span className='text-[#2F327D]'>All-In-One</span>
            Cloud Software.
          </h1>
          <p className='font-[Poppins] font-[400] text-[18px] lg:text-[23px] mt-[20px] lg:mt-[30px] text-[#696984]'>
            TOTC is one powerful online software suite that combines all the tools needed to run a
            successful school or office.
          </p>
        </div>
        <div className='mt-[80px] lg:mt-[120px] flex justify-center flex-wrap gap-[50px_30px] mx-auto px-4'>
          <div className='scroll-anim delay-card-1 bg-white shadow-xl w-full max-w-[450px] min-h-[380px] rounded-lg relative text-center px-6 pt-[100px] pb-8 mt-[40px]'>
            <img
              src='/imgMain/Group1.png'
              alt='Online Billing'
              className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] object-contain'
            />
            <h2 className='text-[#2F327D] font-[500] text-[22px] lg:text-[27px]'>
              Online Billing,
              <br /> Invoicing, & Contracts
            </h2>
            <p className='text-[#696984] text-[16px] lg:text-[20px] font-[400] mt-[20px]'>
              Simple and secure control of your organization's financial and legal transaction. Send
              customized invoices and contracts
            </p>
          </div>
          <div className='scroll-anim delay-card-2 bg-white shadow-xl w-full max-w-[450px] min-h-[380px] rounded-lg relative text-center px-6 pt-[100px] pb-8 mt-[40px]'>
            <img
              src='/imgMain/Group2.png'
              alt='Easy Scheduling'
              className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] object-contain'
            />
            <h2 className='text-[#2F327D] font-[500] text-[22px] lg:text-[27px]'>
              Easy Scheduling &<br /> Attendance Tracking
            </h2>
            <p className='text-[#696984] text-[16px] lg:text-[20px] font-[400] mt-[20px]'>
              Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed
              records of student attendance
            </p>
          </div>
          <div className='scroll-anim delay-card-3 bg-white shadow-xl w-full max-w-[450px] min-h-[380px] rounded-lg relative text-center px-6 pt-[100px] pb-8 mt-[40px]'>
            <img
              src='/imgMain/Group3.png'
              alt='Customer Tracking'
              className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] object-contain'
            />
            <h2 className='text-[#2F327D] font-[500] text-[22px] lg:text-[27px]'>
              Customer Tracking
            </h2>
            <p className='text-[#696984] text-[16px] lg:text-[20px] font-[400] mt-[20px]'>
              Automate and track emails to individuals or groups. Skilline's built-in system helps
              organize your organization
            </p>
          </div>
        </div>
        <div className='scroll-anim flex flex-col mx-auto mt-[150px] lg:mt-[250px] max-w-[1300px]'>
          <h1 className='text-[30px] lg:text-[40px] font-[700] font-bold text-[#2F327D] flex justify-center gap-[12px] flex-wrap text-center'>
            <span className='text-[#49BBBD]'>What is</span> TOTC?
          </h1>
          <p className='font-[Poppins] font-[400] text-[18px] lg:text-[23px] mt-[20px] lg:mt-[30px] text-[#696984] text-center'>
            TOTC is a platform that allows educators to create online classes whereby they can store
            the course materials online; manage assignments, quizzes and exams; monitor due dates;
            grade results and provide students with feedback all in one place.
          </p>
          <div className='flex flex-wrap mt-[50px] gap-[30px] justify-center'>
            <div
              style={{ backgroundImage: 'url(/imgMain/Group5.png)' }}
              className='w-full max-w-[600px] h-[300px] lg:h-[403px] bg-cover bg-center bg-no-repeat rounded-2xl text-center'
            >
              <div className='flex flex-col gap-[20px] mt-[100px] lg:mt-[130px] justify-center'>
                <h1 className='font-[Poppins] font-[600] text-[24px] lg:text-[30px] text-white'>
                  FOR INSTRUCTORS
                </h1>
                <button className='font-[Poppins] cursor-pointer text-white text-[18px] lg:text-[22px] font-[500] w-[220px] lg:w-[280px] h-[60px] lg:h-[80px] rounded-full border-white border-[1px] m-auto hover:bg-black/20 transition'>
                  Start a class today
                </button>
              </div>
            </div>
            <div
              style={{ backgroundImage: 'url(/imgMain/Group6.png)' }}
              className='w-full max-w-[600px] h-[300px] lg:h-[403px] bg-cover bg-center bg-no-repeat rounded-2xl text-center'
            >
              <div className='flex flex-col gap-[20px] mt-[100px] lg:mt-[130px] justify-center'>
                <h1 className='font-[Poppins] font-[600] text-[24px] lg:text-[30px] text-white'>
                  FOR STUDENTS
                </h1>
                <button className='font-[Poppins] cursor-pointer text-white text-[18px] lg:text-[22px] font-[500] w-[220px] lg:w-[280px] h-[60px] lg:h-[80px] rounded-full m-auto bg-[#23BDEEE5] hover:bg-[#1A9FC4E5] transition'>
                  Enter access code
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='scroll-anim flex flex-col lg:flex-row flex-wrap justify-between items-center mx-auto mt-[150px] lg:mt-[200px] gap-12 max-w-[1450px] px-4'>
          <div className='max-w-[600px]'>
            <div style={{ backgroundImage: 'url(/imgMain/Ellipse.png)' }} className='bg-no-repeat'>
              <p className='font-[Poppins] font-[500] text-[24px] lg:text-[30px] text-[#2F327D] text-left'>
                Everything you can do in a physical classroom,
                <span className='text-[#49BBBD]'> you can do with TOTC</span>
              </p>
              <p className='font-[Poppins] text-[18px] lg:text-[20px] mt-[20px] font-[400] text-left text-[#696984]'>
                TOTC's school management software helps traditional and online schools manage
                scheduling, attendance, payments and virtual classrooms all in one secure
                cloud-based system.
              </p>
            </div>
          </div>
          <div className='relative w-full max-w-[650px] h-[350px] lg:h-[400px] rounded-2xl'>
            <img
              src='/imgMain/RectangleBlue.png'
              alt='img'
              className='absolute w-[100px] lg:w-[140px] h-[100px] lg:h-[140px] z-0'
            />
            <img
              src='/imgMain/Rectangle30.png'
              alt='img'
              className='absolute bottom-0 right-0 w-[100px] lg:w-[140px] h-[100px] lg:h-[140px] z-0'
            />
            <img
              src='/imgMain/confident-teacher-explaining-lesson-pupils.png'
              alt='img'
              className='relative z-10 w-[93%] h-[93%] object-cover rounded-xl mx-auto mt-[12px]'
            />
            <button className='absolute left-[45%] top-[40%] w-14 h-14 rounded-full bg-white z-20 flex items-center justify-center hover:bg-[#3d9da0] transition cursor-pointer shadow-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#3B82F6'
                viewBox='0 0 24 24'
                className='w-8 h-8'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='scroll-anim flex justify-center mt-[100px] lg:mt-[150px] flex-col mx-auto text-center'>
          <h1 className='font-[Poppins] font-[700] text-[28px] lg:text-[35px] text-[#2F327D]'>
            Our <span className='text-[#49BBBD]'>Features</span>
          </h1>
          <p className='font-[Poppins] font-[400] text-[18px] lg:text-[25px] mt-[20px] text-[#696984]'>
            This very extraordinary feature, can make learning activities more efficient
          </p>
        </div>
        <div className='scroll-anim w-full max-w-[1500px] mx-auto mt-[100px] lg:mt-[150px] flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10'>
          <div className='relative w-full max-w-[700px] h-[400px] lg:h-[550px]'>
            <img
              src='/imgMain/Group71.png'
              alt='img'
              className='absolute left-0 top-[40px] z-10 max-w-full'
            />
            <img
              src='/imgMain/Ellipse.png'
              alt='img'
              className='absolute left-[20px] top-0 z-0 w-[100px] lg:w-[140px]'
            />
            <img src='/imgMain/EllipseBlue.png' alt='img' className='absolute left-[180px] top-0' />
            <img
              src='/imgMain/EllipsePurple.png'
              alt='img'
              className='absolute z-0 right-[50px] bottom-[100px]'
            />
            <img
              src='/imgMain/EllipseRed.png'
              alt='img'
              className='absolute left-[300px] bottom-0'
            />
          </div>
          <div className='w-full max-w-[650px] flex flex-col justify-center'>
            <p className='font-[Poppins] font-[700] text-[#2F327D] text-[28px] lg:text-[35px] text-left leading-tight'>
              A <span className='text-[#49BBBD]'>user interface</span> designed for the classroom
            </p>
            <div className='flex flex-col gap-[30px] lg:gap-[40px] mt-[40px]'>
              <div className='flex gap-[25px] items-start'>
                <img
                  src='/imgMain/First.png'
                  alt='img'
                  className='w-[26px] h-[26px] mt-1 flex-shrink-0'
                />
                <p className='font-[Poppins] font-[400] text-[18px] lg:text-[20px] text-[#696984] text-left'>
                  Teachers don't get lost in the grid view and have a dedicated Podium space.
                </p>
              </div>
              <div className='flex gap-[25px] items-start'>
                <img
                  src='/imgMain/Two.png'
                  alt='img'
                  className='w-[26px] h-[26px] mt-1 flex-shrink-0'
                />
                <p className='font-[Poppins] font-[400] text-[18px] lg:text-[20px] text-[#696984] text-left'>
                  TA's and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className='flex gap-[25px] items-start'>
                <img
                  src='/imgMain/userss.png'
                  alt='img'
                  className='w-[26px] h-[26px] mt-1 flex-shrink-0'
                />
                <p className='font-[Poppins] font-[400] text-[18px] lg:text-[20px] text-[#696984] text-left'>
                  Teachers can easily see all students and class data at one time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='scroll-anim w-full max-w-[1500px] mx-auto mt-[100px] lg:mt-[150px] flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10'>
          <div className='w-full max-w-[700px]'>
            <h1 className='font-[Poppins] font-[600] text-[28px] lg:text-[35px] text-[#2F327D] text-left leading-tight'>
              <span className='text-[#49BBBD]'>Tools</span> For Teachers And Learners
            </h1>
            <p className='text-[#696984] font-[Poppins] font-[500] text-[18px] lg:text-[23px] mt-[20px] text-left'>
              Class has a dynamic set of teaching tools built to be deployed and used during class.
              Teachers can handout assignments in real-time for students to complete and submit.
            </p>
          </div>
          <img src='/imgMain/Group120.png' alt='img' className='w-full max-w-[650px]' />
        </div>
        <div className='scroll-anim w-full max-w-[1500px] mx-auto mt-[100px] lg:mt-[150px] flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10'>
          <img src='/imgMain/Group102.png' alt='img' className='w-full max-w-[650px]' />
          <div className='w-full max-w-[700px]'>
            <h1 className='text-[#2F327D] font-[Poppins] font-[600] text-[28px] lg:text-[38px] text-left leading-tight'>
              Assessments, <span className='text-[#49BBBD]'>Quizzes,</span> Tests
            </h1>
            <p className='text-[#696984] font-[Poppins] font-[500] text-[18px] lg:text-[23px] mt-[20px] text-left'>
              Easily launch live assignments, quizzes, and tests. Student results are automatically
              entered in the online gradebook.
            </p>
          </div>
        </div>
        <div className='scroll-anim w-full max-w-[1500px] mx-auto mt-[100px] lg:mt-[150px] flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10'>
          <div className='w-full max-w-[700px]'>
            <h1 className='text-[#2F327D] font-[Poppins] font-[600] text-[28px] lg:text-[38px] text-left leading-tight'>
              <span className='text-[#49BBBD]'>Class Management</span> Tools for Educators
            </h1>
            <p className='text-[#696984] font-[Poppins] font-[500] text-[18px] lg:text-[23px] mt-[20px] text-left'>
              Class provides tools to help run and manage the class such as Class Roster,
              Attendance, and more. With the Gradebook, teachers can review and grade tests and
              quizzes in real-time.
            </p>
          </div>
          <img src='/imgMain/Group412.png' alt='img' className='w-full max-w-[650px]' />
        </div>
        <div className='scroll-anim w-full max-w-[1500px] mx-auto mt-[100px] lg:mt-[150px] flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10'>
          <img src='/imgMain/Group124.png' alt='img' className='w-full max-w-[650px]' />
          <div className='w-full max-w-[700px]'>
            <h1 className='text-[#2F327D] font-[Poppins] font-[600] text-[28px] lg:text-[38px] text-left leading-tight'>
              One-on-One <span className='text-[#49BBBD]'>Discussions</span>
            </h1>
            <p className='text-[#696984] font-[Poppins] font-[500] text-[18px] lg:text-[23px] mt-[20px] text-left'>
              Teachers and teacher assistants can talk with students privately without leaving the
              Zoom environment.
            </p>
          </div>
        </div>
        <div className='scroll-anim flex justify-center mx-auto mt-[80px] lg:mt-[100px]'>
          <button className='w-[220px] lg:w-[280px] h-[60px] lg:h-[80px] border-[1px] border-[#49BBBD] rounded-full cursor-pointer text-[#49BBBD] font-[Nunito_Sans] text-[18px] lg:text-[20px] hover:text-[#38999A] hover:bg-gray-100 transition duration-300'>
            See more features
          </button>
        </div>
      </div>
    </>
  );
};
