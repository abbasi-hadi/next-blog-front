import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { APP_NAME } from '../config';
import Link from 'next/link';
import { isAuth, signin, signuot } from '../actions/auth';
import Router from 'next/router';
import NProgress from 'nprogress';
Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeStart = url => NProgress.done()
Router.onRouteChangeStart = url => NProgress.done()

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',

}
const navigation = [
  { name: 'صفحه اصلی', href: '#', current: true },
  { name: 'تیم', href: '#', current: false },
  { name: 'پروژه ها', href: '#', current: false },
]
const signMenu = [
  { name: 'ثبت نام', href: '/signup', current: false },
  { name: 'ورود', href: '/signin', current: false },
]
const userNavigation = [
  { name: 'حساب کاربری', href: '/dashboard' },
  { name: 'تنظیمات', href: '/user-setting' },
  { name: 'خروج', href: '/signout' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800 sticky">
        {({ open }) => (
          <>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      
                        <img className="object-cover h-14 w-full" src="/img/avrinweb.png" />
                      
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="mr-10 flex items-baseline flex-item  space-x-4 space-x-reverse">
                      {navigation.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                        
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block ">
                  {!isAuth() && <>
                    <div className="place-items-end mr-10 flex items-end flex-item  justify-end space-x-4 space-x-reverse">
                      {signMenu.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                         
                        </Link>
                      ))}
                    </div>
                  </>
                  }
                  {isAuth() && (
                    <>
                      <div className="mr-4 flex items-center md:mr-6">
                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800  flex items-center text-sm ">
                              <span className="sr-only">Open user menu</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 stroke-current text-indigo-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg><span className="text-white text-sm">{isAuth().name}</span>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Link href='/signin' onClick={() => { signuot(() => Router.replace(`/signin`)) }} className="block px-4 py-2 text-sm text-gray-700">
                                
                                  خروج
                                
                              </Link>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>

                    </>
                  )}
                </div>
                <div className="mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {
                isAuth() && (
                  <>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">{user.name}</div>
                          <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium
                             text-gray-400 hover:text-white hover:bg-gray-700">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
export default Header
