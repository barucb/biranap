import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Card, Link, NextUIProvider } from "@nextui-org/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import instagram from './assets/instagram.svg'
import telegram from './assets/telegram.svg'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <div>
        <Toaster
          position="bottom-center"
        />
        <RouterProvider router={router} />
        <Card className='fixed inset-x-0 bottom-0 rounded-none rounded-t-md pt-1 pb-3 shadow-none border-t border-gray-200 w-full flex justify-center'>

          <div className="flex justify-center gap-2  items-center">

            {/* <Link href="https://www.facebook.com/profile.php?id=100076567689998" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="facebook link" />
                          </Link> */}
            {/* <Link href="https://www.instagram.com/biranadigitals" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram link" />
              </Link> */}
            {/* <Link href="https://www.linkedin.com/in/ande-mamma-a1518b246" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin link" />
                          </Link> */}
            {/* <Link href="https://youtube.com/@AndEMamma?si=kFgqyEO4mp_ZK9ix" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="youtube link" />
                          </Link> */}

            <h3 className=" font-bold text-lg">Made with ❤️ by <Link className="text-[#fc7405] text-lg" href="https://biranadigitals.vercel.app">Birana Digitals</Link></h3>
            <Link href="https://t.me/biranadigitals" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="telegram link" />
            </Link>
          </div>
        </Card>
      </div>
    </NextUIProvider>
  </React.StrictMode >,
)
