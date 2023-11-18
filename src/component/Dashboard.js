const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Example() {
  return (
    <>
      <body class="bg-slate-950">
        <nav class="w-full h-16 bg-indigo-200 flex justify-between items-center px-4 md:px-4">
          <div class="text-2xl text-indigo-700 font-semibold">
            Disaster Defenders
          </div>
          <ul class="md:flex hidden">
            <li class="mx-[10px] cursor-pointer">Home</li>
            <li class="mx-[10px] cursor-pointer">About</li>
            <li class="mx-[10px] cursor-pointer">Contact</li>
          </ul>
          <div class="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-lg cursor-pointer">
            Login/SignUp
          </div>
          <div class="md:hidden">
            <a class="text-4xl" href="#">
              &#8801;
            </a>
          </div>
        </nav>
        <header class="w-full h-auto">
          {/* <img
            class="w-full hidden md:block p-40"
            src="https://cdn.pixabay.com/photo/2021/07/06/17/57/helicopter-6392253_960_720.jpg"
            alt="#"
          /> */}
          <img
            class="w-full md:hidden"
            src="https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          {/* <video src="" alt="" /> */}
        </header>
        <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p=10">
          <div class="w-full h-auto flex flex-col items-center text-center">
            <p class="text-indigo-600 font-bold text-3xl md:text-5xl text-center p-4 mt-5 hover:cursor-pointer">
              Natural Disaster Response and Recovery
            </p>
            <div class="w-72 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-4 mb-12"></div>
            <div class="w-full flex flex-wrap justify-evenly">
              <div class="w-20 h-auto flex flex-col items-center mb-12 hover:cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8944/8944401.png"
                  alt=""
                />
                <p class="text-2xl font-bold text-white">960000+</p>
                <p class="text-3xl font-bold text-gray-500 ">Police</p>
              </div>

              <div class="w-20 h-auto flex flex-col items-center mb-12 hover:cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1909/1909912.png"
                  alt=""
                />
                <p class="text-2xl font-bold text-white">86000+</p>
                <p class="text-3xl font-bold text-gray-500 ">Fire Fighter</p>
              </div>

              <div class="w-20 h-auto flex flex-col items-center mb-12 hover:cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4320/4320350.png"
                  alt=""
                />
                <p class="text-2xl font-bold text-white">7800+</p>
                <p class="text-3xl font-bold text-gray-500 ">Hospital</p>
              </div>
            </div>

            <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p=10">
              <div class="w-full h-auto flex flex-col items-center mb-12 hover:cursor-pointer">
                <p class="text-indigo-600 font-semibold text-3xl md:text-5xl text-center p-2 mt-4 hover:cursor-pointer">
                  Response Management
                </p>
                <div class="w-72 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-4 mb-12"></div>
              </div>
            </div>

            <div class="w-[90%] h-auto flex flex-wrap justify-around p-50">
              <div class="w-65 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  class="md:w-[60%] md:h-[50%] w-full"
                  src="https://cdn.pixabay.com/photo/2015/02/12/08/31/garda-633430_960_720.jpg"
                  alt=""
                />
                <p class="text-3xl font-bold text-white mt-4">
                  NDRF RESCUE TEAM
                </p>
                <p class="text-xl font-bold text-gray-400 mt-4">
                  The National Disaster Response Force (NDRF) is an Indian
                  specialized force constituted "for the purpose of special
                  response to a threatening disaster situation or
                  disaster.National Disaster Response Force consist of 16
                  battalions from the BSF, CISF, CRPF, ITBP, SSB and Assam
                  Rifles. Each battalion have 18 self-contained specialist
                  search and rescue teams of 45 personnel each including
                  engineers, technicians, electricians, dog squads and
                  medical/paramedics. The total strength of each battalion is
                  1,149. All the 16 battalions have been equipped and trained to
                  respond natural as well as man-made disasters. Battalions are
                  also trained and equipped for response during chemical,
                  biological, radiological and nuclear (CBRN) emergencies.
                  <div class="mt-6">
                    <p> TELE/FAX NO. - 011-23438091, 011-23438136</p>
                  </div>
                  <div>
                    <p>EMAIL ID - hq.ndrf@nic.in</p>
                  </div>
                </p>
                <div class="my-6 bg-red-500 py-2 px-2 rounded-lg">
                  <button class="text-white font-semibold ">
                    Alerting Team
                  </button>
                </div>
              </div>

              <div class="w-[100%] flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  class="md:w-[60%] md:h-[50%] w-full"
                  src="https://cdn.pixabay.com/photo/2017/08/25/00/51/police-2678857_960_720.jpg"
                  alt=""
                />
                <p class="text-3xl font-bold text-white mt-4">
                  POLICE RESCUE TEAM
                </p>
                <p class="text-xl font-bold text-gray-400 mt-4">
                  Police are responsible for identifying and assisting those in
                  life-threatening situations as well as supplying relief
                  supplies in convoys. Proper medical treatment should be
                  provided to injured individuals. For this,trained health
                  professionals should be deployed at ground zero.The police
                  will ensure that the fire and ambulance services can do their
                  job. They will cordon off the disaster area, direct traffic
                  and sometimes set up a safety zone around the disaster area.
                  If victims are difficult to identify, the police will deploy
                  the disaster identification team, consisting of experts
                  convened on an ad hoc basis. This team of specialists perform
                  their work in consultation with one another.
                  <div class="mt-6">
                    <p> TELEPHONE NO - 2250-5134/5340</p>
                  </div>
                  <div>
                    <p>EMAIL ID - dctp@kolkatatrafficpolice.gov.in.</p>
                  </div>
                </p>

                <div class="my-6 bg-red-500 py-2 px-2 rounded-lg">
                  <button class="text-white font-semibold ">
                    Alerting Team
                  </button>
                </div>
              </div>
              <div class="w-65 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  class="md:w-[60%] md:h-[50%] w-full"
                  src="https://cdn.pixabay.com/photo/2019/04/23/12/57/brand-4149479_960_720.jpg"
                  alt=""
                />
                <p class="text-3xl font-bold text-white mt-4">
                  FIRE FIGHTER TEAM
                </p>
                <p class="text-xl font-bold text-gray-400 mt-4">
                  Fire services is very crucial in any emergency. In fact, in
                  the developed world, fire services are not only employed for
                  firefighting but also for rescue operations as emergency
                  services. As per the Standing Fire Advisory Committee, on the
                  basis of laid down norms, existing deficiencies as regards
                  fire stations, fire fighting vehicles and personnel in the
                  country. They are responsible for ensuring that a fire is put
                  out as well as responding to other emergency situations. A few
                  of the main duties of a firefighter are developing performing
                  CPR, providing emergency services, responding to fire alarms,
                  and putting out fires in buildings The service consists of 61
                  fire stations and 3616 personnel (3280 firefighters, 289
                  mechanics), and attends to 22,000 fire and rescue calls on an
                  average every year.
                  <div class="mt-6">
                    <p> TELEPHONE - 101 & 112</p>
                  </div>
                  <div>
                    <p>EMAIL ID - cfo.mfb@mcgm.gov.in</p>
                  </div>
                </p>
                <div class="my-6 bg-red-500 py-2 px-2 rounded-lg">
                  <button class="text-white font-semibold ">
                    Alerting Team
                  </button>
                </div>
              </div>
              <div class="w-65 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  class="md:w-[60%] md:h-[50%] w-full"
                  src="https://cdn.pixabay.com/photo/2018/03/24/08/35/vehicle-3256021_960_720.jpg"
                  alt=""
                />
                <p class="text-3xl font-bold text-white mt-4">MEDICAL TEAM</p>
                <p class="text-xl font-bold text-gray-400 mt-4">
                  Disaster medicine is predicated on the principle of providing
                  care to the most victims possible as dictated by the resources
                  available and by patient condition and likelihood of survival.
                  Disaster triage involves assigning patients into treatment
                  categories based on their predicted survivability.Anyone
                  injured in a disaster will require medical assistance as soon
                  as possible. Ambulance paramedics will usually provide first
                  aid and stabilise the injured so that they can be taken to
                  hospital. Treating Life-Threatening Conditions Without
                  treatment, severe bleeding and airway obstruction can quickly
                  lead to death.
                  <div class="mt-6">
                    <p> TELEPHONE - (210) 227-9000 </p>
                  </div>
                  <div>
                    <p>EMAIL ID - TXinfo@medteam.com</p>
                  </div>
                </p>
                <div class="my-6 bg-red-500 py-2 px-2 rounded-lg">
                  <button class="text-white font-semibold ">
                    Alerting Team
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-auto flex flex-col items-center text-center">
            <p class="text-indigo-700 font-bold text-3xl md:text-4xl text-center p-4">
              Contact
            </p>
            <div class="w-36 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-4 mb-12"></div>
            <div class="p-1 mb-4">
              <p class="text-xl font-bold text-gray-400">
                {" "}
                TELEPHONE - 011-23438091, 011-23438136
              </p>
            </div>
            <div class="mb-8">
              <p class="text-xl font-bold text-gray-400">
                EMAIL ID - support@disasterdynamo.com
              </p>
            </div>
          </div>
          <footer class="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-evenly md:px-12">
            <div>
              <img
                class="w-28 h-20 md:h-36 md:w-52 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 ml-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2PEocAZVR9fnMGYu7FLNXp42vBMZ34ftPQ&usqp=CAU"
                alt=""
              />
              <p class="my-4">Email us: support@disasterdynamo.com</p>
              <img src="" alt="" />
            </div>
            <div>
              <h2 class="font-bold text-xl mt-4">Disaster Dynamao</h2>
              <div class="w-46 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-4 mb-12"></div>
              <div>
                <p>About us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
}
