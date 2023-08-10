import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";

import LogoNav from "../icons/logo-nav";
import { BookOpenIcon, MicrophoneIcon, RadioIcon } from "@heroicons/react/24/solid";
import Modal from "../ui/modal";

const products = [
  {
    name: "Słuchowiska",
    description: "Pozwól słuchaczowi przeżyć Twoją historię",
    href: "#",
    icon: MicrophoneIcon,
  },
  {
    name: "Reklamy",
    description: "Przekaż swoją wiadomość w najlepszej formie",
    href: "#",
    icon: RadioIcon,
  },
  {
    name: "Audiobooki",
    description: "Przenieś słuchacza w centrum akcji",
    href: "#",
    icon: BookOpenIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [initialSongIndex, setInitialSongIndex] = useState<number>(0);

  return (
    <header className="font-Main bg-[#0b0b14] xl:bg-[#0b0b14ec] sticky top-0 z-[9999] xl:backdrop-blur-md">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="">
            <span className="sr-only">Graysound</span>
            <LogoNav />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white cursor-none lg:cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white outline-none">
              Usługi
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-[999] mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#121221fd] ">
                <div className="p-4 ">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 "
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                        <item.icon
                          className="h-5 w-5 text-block"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-bold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-textGrayBlock">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
            {/* <div className="absolute top-full z-[9999] bg-red-900 w-full mt-10 flex justify-center">
              <div className="bg-red-500">
                <Modal initialSongIndex={initialSongIndex} closeModal={() => setIsOpen(false)} />

              </div>
            </div> */}

          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Baza głosów
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Kalkulator wyceny
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Kontakt
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-bold leading-6 text-white py-[10px] px-5 rounded-full  bg-block"
          >
            Wyceń swój projekt
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-[#0b0b14fd] backdrop-blur-md px-6 py-6 font-Main">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Graysound</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white cursor-none lg:cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white cursor-none lg:cursor-pointer">
                        Usługi
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-textGray "
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white cursor-none lg:cursor-pointer"
                >
                  Baza głosów
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white cursor-none lg:cursor-pointer"
                >
                  Kalkulator wyceny
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white cursor-none lg:cursor-pointer"
                >
                  Kontakt
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white cursor-none lg:cursor-pointer"
                >
                  Wyceń swój projekt
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
