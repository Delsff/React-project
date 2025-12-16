export const FirstMain = () => {
  return (
    <>
      <>
        <main className='w-[1550px]'>
          <div className='flex justify-center flex-col mt-[200px]'>
            <h1 className='text-[45px] font-[Buenos Aires Trial] font-[700] font-bold '>
              Our Success
            </h1>
            <p className='font-[Buenos Aires Trial] font-[400] text-[18px]'>
              Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
              <br />
              nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-[40px] mt-[100px] w-[1527px] h-[138px]'>
            <img src='public\imgMain\Frame1.png' alt='img' />
            <img src='public\imgMain\Frame2.png' alt='img' />
            <img src='public\imgMain\Frame3.png' alt='img' />
            <img src='public\imgMain\Frame4.png' alt='img' />
            <img src='public\imgMain\Frame5.png' alt='img' />
          </div>
          <div className='flex justify-center flex-col mt-[200px]'>
            <h1 className='text-[40px] font-[700] font-bold text-[#49BBBD] flex gap-[12px] justify-center'>
              <span className='text-[#2F327D]'>All-In-One</span>
              Cloud Software.
            </h1>
            <p className='font-[Poppins] font-[400] text-[23px] mt-[30px] text-[#696984]'>
              TOTC is one powerful online software suite that combines all the tools <br /> needed
              to run a successful school or office.
            </p>
          </div>
          <div className='w-[1470px] h-[300px] mt-[120px] flex justify-center flex-wrap gap-[30px]'>
            <div className='bg-[white] shadow-xl w-[450px] h-[430px] rounded-lg relative'>
              <img
                src='/imgMain/Group1.png'
                alt='img'
                className='absolute bottom-[70%] left-[140px]'
              />
              <h2 className='text-[#2F327D] font-[500] text-[27px] mt-[120px]'>
                Online Billing,
                <br /> Invoicing, & Contracts
              </h2>
              <p className='text-[#696984] text-[22px] font-[400] mt-[30px]'>
                Simple and secure control of your <br /> organization's financial and legal <br />
                transactions. Send customized <br /> invoices and contracts
              </p>
            </div>
            <div className='bg-[white] shadow-xl w-[450px] h-[430px] rounded-lg relative'>
              <img
                src='/imgMain/Group2.png'
                alt='img'
                className='absolute bottom-[70%] left-[140px]'
              />
              <h2 className='text-[#2F327D] font-[500] text-[27px] mt-[120px]'>
                Easy Scheduling & <br /> Attendance Tracking
              </h2>
              <p className='text-[#696984] text-[22px] font-[400] mt-[30px]'>
                Schedule and reserve classrooms at <br /> one campus or multiple campuses. <br />{' '}
                Keep detailed records of student <br /> attendance
              </p>
            </div>
            <div className='bg-[white] shadow-xl w-[450px] h-[430px] rounded-lg relative'>
              <img
                src='/imgMain/Group3.png'
                alt='img'
                className='absolute bottom-[70%] left-[140px]'
              />
              <h2 className='text-[#2F327D] font-[500] text-[27px] mt-[140px]'>
                Customer Tracking
              </h2>
              <p className='text-[#696984] text-[22px] font-[400] mt-[55px]'>
                Automate and track emails to <br /> individuals or groups. Skilline's <br />{' '}
                built-in system helps organize <br /> your organization
              </p>
            </div>
          </div>
          <div className='w-[1300px] h-[800px] flex justify-center flex-col m-auto mt-[200px]'>
            <h1 className='text-[40px] font-[700] font-bold text-[#2F327D] flex justify-center gap-[12px]'>
              <span className='text-[#49BBBD]'> What is</span> TOTC?
            </h1>
            <p className='font-[Poppins] font-[400] text-[23px] mt-[30px] text-[#696984] text-center'>
              TOTC is a platform that allows educators to create online classes whereby they can{' '}
              <br /> store the course materials online; manage assignments, quizzes and exams;
              monitor <br /> due dates; grade results and provide students with feedback all in one
              place.
            </p>
            <div className='flex flex-wrap'>
              <div
                style={{ backgroundImage: 'url(/imgMain/Group5.png)' }}
                className='w-[600px] h-[403px] bg-cover bg-center bg-no-repeat mt-[50px] m-auto'
              >
                <div className='flex flex-col gap-[20px] mt-[130px] justify-center'>
                  <h1 className='font-[Poppins] font-[600] text-[30px] text-[white]'>
                    FOR INSTRUCTORS
                  </h1>
                  <button
                    className='font-[Poppins] cursor-pointer text-[white] text-[22px] font-[500] w-[280px] h-[80px] 
              rounded-full border-[white] border-1 m-auto hover:bg-black/20'
                  >
                    Start a class today
                  </button>
                </div>
              </div>
              <div
                style={{ backgroundImage: 'url(/imgMain/Group6.png)' }}
                className='w-[600px] h-[403px] bg-cover bg-center bg-no-repeat mt-[50px] m-auto'
              >
                <div className='flex flex-col gap-[20px] mt-[130px] justify-center'>
                  <h1 className='font-[Poppins] font-[600] text-[30px] text-[white]'>
                    FOR STUDENTS
                  </h1>
                  <button
                    className='font-[Poppins] cursor-pointer text-[white] text-[22px] font-[500] w-[280px] h-[80px] 
              rounded-full m-auto bg-[#23BDEEE5] hover:bg-[#1A9FC4E5]'
                  >
                    Enter access code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[1450px] flex flex-wrap justify-between m-auto mt-[20px] p-10'>
            <div>
              <div
                style={{
                  backgroundImage: 'url(/imgMain/Ellipse.png)',
                }}
                className='bg-no-repeat h-auto mx-[40px]'
              >
                <p className='font-[Poppins] font-[500] text-[30px] text-[#2F327D] text-left mx-[40px] z-10'>
                  Everything you can do in a physical <br />
                  classroom,
                  <span className='font-[Poppins] text-[#49BBBD]'>you can do with TOTC</span>
                </p>
                <p className='font-[Poppins] text-[20px] mt-[20px] font-[400] text-left ml-[40px] text-[#696984]'>
                  TOTC’s school management software helps traditional <br /> and online schools
                  manage scheduling, attendance, <br /> payments and virtual classrooms all in one
                  secure cloud- <br />
                  based system.
                  <br />
                </p>
              </div>
            </div>
            <div className='relative w-[650px] h-[400px] rounded-2xl'>
              <img
                src='/imgMain/RectangleBlue.png'
                alt='img'
                className='absolute w-[140px] h-[140px] z-0'
              />

              <img
                src='/imgMain/Rectangle30.png'
                alt='img'
                className='absolute bottom-[0px] right-[0px] w-[140px] h-[140px] z-0'
              />
              <img
                src='/imgMain/confident-teacher-explaining-lesson-pupils.png'
                alt='img'
                className='relative z-10 w-[93%] h-[93%] object-cover rounded-xl mx-auto mt-[12px]'
              />
              <button
                className='
      absolute left-[290px] top-[170px] w-16 h-16 rounded-full bg-white z-20 flex items-center justify-center hover:bg-[#3d9da0] transition cursor-pointer'
              >
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
            <div className='flex justify-center mt-[100px] flex-col w-[1500px]'>
              <h1 className='font-[Poppins] font-[700] text-[35px] text-[#2F327D]'>
                Our <span className='text-[#49BBBD]'>Features</span>
              </h1>
              <p className='font-[Poppins] font-[400] text-[25px] mt-[20px]'>
                This very extraordinary feature, can make learning activities more efficient
              </p>
            </div>
            <div className='flex flex-wrap w-[1500px] relative mt-[80px]'>
              <div>
                <img
                  src='public\imgMain\Group71.png'
                  alt='img'
                  className='absolute left-0 top-0 mt-[80px] z-10'
                />
                <img
                  src='public\imgMain\Ellipse.png'
                  alt='img'
                  className='absolute left-[20px] top-[30px] z-0 w-[140px] h-[140px]'
                />
                <img
                  src='public\imgMain\EllipseBlue.png'
                  alt='img'
                  className='absolute left-[180px]'
                />
                <img
                  src='public\imgMain\EllipsePurple.png'
                  alt='img'
                  className='absolute z-0 right-[520px] top-[400px]'
                />
                <img
                  src='public\imgMain\EllipseRed.png'
                  alt='img'
                  className='absolute right-[750px] top-[670px]'
                />
              </div>
              <div className='relative left-[900px] w-[500px] flex justify-center flex-col ml-[30px]'>
                <p className='font-[Poppins] text-[20px] mt-[20px] font-[700] text-left ml-[40px] text-[#2F327D] text-[35px] text-left relative right-[30px]'>
                  A <span className='text-[#49BBBD]'>user interface</span> designed <br /> for the
                  classroom
                </p>
                <div className='flex flex-col gap-[20px]'>
                  <div className='flex flex-wrap gap-[25px] mt-[50px] ml-[20px]'>
                    <img src='public\imgMain\First.png' alt='img' className='w-[26px] h-[26px]' />
                    <p className='relative bottom-[20px] font-[Poppins] font-[400] text-[20px] text-[#696984]'>
                      Teachers don’t get lost in the grid view <br /> and have a dedicated Podium
                      space.
                    </p>
                  </div>
                  <div className='flex flex-wrap gap-[25px] mt-[50px] ml-[20px]'>
                    <img src='public\imgMain\Two.png' alt='img' className='w-[26px] h-[26px]' />
                    <p className='relative bottom-[20px] font-[Poppins] font-[400] text-[20px] text-[#696984]'>
                      TA’s and presenters can be moved to <br /> the front of the class.
                    </p>
                  </div>
                  <div className='flex flex-wrap gap-[25px] mt-[50px] ml-[20px]'>
                    <img src='public\imgMain\userss.png' alt='img' className='w-[26px] h-[26px]' />
                    <p className='relative bottom-[20px] font-[Poppins] font-[400] text-[20px] text-[#696984]'>
                      Teachers can easily see all students <br />
                      and class data at one time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[540px] ml-[40px] flex flex-wrap'>
              <div>
                <h1 className='font-[Poppins] font-[600] text-[35px] text-[#2F327D] text-left'>
                  <span className='text-[#49BBBD] font-[600]'>Tools</span> For Teachers <br /> And
                  Learners
                  <p className='text-[#696984] font-[Poppins] font-[500] text-[25px] mt-[20px]'>
                    Class has a dynamic set of teaching tools built to <br /> be deployed and used
                    during class. Teachers can <br /> handout assignments in real-time for students
                    to <br />
                    complete and submit.
                  </p>
                </h1>
              </div>
              <div>
                <img
                  src='public\imgMain\Group120.png'
                  alt='img'
                  className='absolute right-[50px]'
                />
              </div>
            </div>
            <div className='w-[1500px] flex flex-wrap m-auto mt-[500px]'>
              <div>
                <img src='public\imgMain\Group102.png' alt='img' />
              </div>
              <div className='flex flex-col ml-[100px]'>
                <h1 className='text-[#2F327D] font-[Poppins] font-[600] text-[35px] mt-[200px] text-left'>
                  Assessments, <br /> <span className='text-[#49BBBD] font-[600]'> Quizzes,</span>
                  Tests
                </h1>
                <p className='text-[#696984] font-[Poppins] font-[500] text-[25px] mt-[20px] text-left'>
                  Easily launch live assignments, quizzes, and <br /> tests. Student results are
                  automatically entered in <br /> the online gradebook.
                </p>
              </div>
            </div>
            <div className='w-[1500px] h-auto m-auto flex flex-wrap mt-[150px] gap-[40px]'>
              <div>
                <h1 className='text-[#2F327D] font-[Poppins] font-[600] text-[38px] text-left'>
                  <span className='text-[#49BBBD] font-[600]'> Class Management</span> <br /> Tools
                  for Educators
                </h1>
                <p className='text-[#696984] font-[Poppins] font-[500] text-[25px] mt-[20px] text-left'>
                  Class provides tools to help run and manage the class <br /> such as Class Roster,
                  Attendance, and more. With the <br /> Gradebook, teachers can review and grade
                  tests and <br /> quizzes in real-time.
                </p>
              </div>
              <div>
                <img
                  src='public\imgMain\Group412.png'
                  alt='img'
                  className='h-140 relative bottom-[120px]'
                />
              </div>
            </div>
            <div className='w-[1500px] h-auto m-auto flex flex-wrap mt-[150px] gap-[40px]'>
              <div>
                <img src='public\imgMain\Group124.png' alt='img' />
              </div>
              <div className='mb-[10px] ml-[100px]'>
                <h1 className='text-[#2F327D] font-[Poppins] font-[600] text-[38px] text-left mt-[150px]'>
                  One-on-One <br /> <span className='text-[#49BBBD] font-[600]'>Discussions</span>
                </h1>
                <p className='text-[#696984] font-[Poppins] font-[500] text-[25px] mt-[20px] text-left'>
                  Teachers and teacher assistants can talk with <br /> students privately without
                  leaving the Zoom <br /> environment.
                </p>
              </div>
            </div>
            <div className='flex justify-center m-auto mt-[40px]'>
              <button className='w-[280px] h-[80px] border-1 border-[#49BBBD] rounded-full cursor-pointer text-[#49BBBD] font-[Nunito Sans] text-[20px] hover:text-[#38999A] hover:bg-gray-100'>
                See more features
              </button>
            </div>
          </div>
        </main>
      </>
    </>
  );
};
