import React from "react";
import {Link} from  "react-router-dom";
import './App.css';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#910A67] text-white">
        <nav className="ml-auto flex  gap-4 sm:gap-6">
                        <span className=" mx-[350px] text-4xl font-serif font-bold text-[#3C0753]">Explore Ease</span>

          <Link className="text-sm font-medium hover:text-[#910A67] underline-offset-4" to='/login'>
            <button className="bg-[#720455] w-14 h-8 rounded-md">Login</button>
          </Link>
          <Link className="text-sm font-medium hover:text-[#910A67] underline-offset-4" to='/About'>
            <button className="bg-[#720455] w-14 h-8 rounded-md">About</button>
          </Link>
          <Link className="text-sm font-medium hover:text-[#910A67] underline-offset-4" href="/Home">
            <button className="bg-[#720455] w-14 h-8 rounded-md">Home</button>
          </Link>
        </nav>
      </header>
      <main className="flex-1" >
        <section
  className="w-[250] pt-16 md:pt-26 lg:pt-36 border-y"
  style={{
     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media.smallbiztrends.com/2019/09/Team-Outing-Ideas.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover', 
    height: '50vh',
  }}
>
  <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
      <div>
        <h1 className="lg:leading-tighter text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Welcome to Explore Ease
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          The ultimate website for all your day out plans
        </p>
        <div className="space-x-4">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-red-300 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-300 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            to="/"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need in One App</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From restaurants to temples and malls everything has been covered
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <HeartIcon className="mx-auto h-12 w-12" />
                <h3 className="text-lg font-bold text-center">Recommend your friend</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Access a wide range of varieties for your best day out.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <HomeIcon className="mx-auto h-12 w-12" />
                <h3 className="text-lg font-bold text-center">Home</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Find your new best place from our list of exiting places
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <UsersIcon className="mx-auto h-12 w-12" />
                <h3 className="text-lg font-bold text-center">group</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  from one person to many you chose we provide
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:py-30 bg-gray-100  dark:bg-blue-300">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied users who have found Explore Ease to be an invaluable tool in their outings.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                “Unlock the joy of seamless get-togethers with Explore Ease Day Outing App - Where every moment becomes a cherished memory, and every outing is an adventure waiting to happen!“
              </blockquote>
              <div>
                <div className="font-semibold">Explore Ease</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Explore Ease User</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Explore Ease. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover: -offset-4" href="#">
            App Store
          </Link>
          <Link className="text-xs hover: -offset-4" href="#">
            Google Play Store
          </Link>
          <Link className="text-xs hover: -offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}





function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
