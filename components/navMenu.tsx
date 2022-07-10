import { Button, Center, Tooltip, useDisclosure } from "@chakra-ui/react";
import { DiscordUser } from "../utils/types";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react";
import { Link } from "./Link";
import { customConfiguration } from "../pages/_app";

const colors = {
    defaultText: "text-slate-200",
    defaultBackground: "bg-zinc-800",
    defaultBackgroundHover: "bg-zinc-700",
    logoutText: "text-red-500"
};

export default function NavigationMenu() {
    return (
        <div className="navMenu poppins pt-8 pl-8">
            <a className="inline" href="/">
                <img src={customConfiguration.rawIcon.SVG} className="navMenuIcon navMenuItem logo inline pb-4 spinner:hover" />
                <h1 className="text-3xl font-bold inline-block pl-5">{customConfiguration.title}</h1>
            </a>
            {/*<div className="inline ml-5 font-semibold">
                <a href="/docs" className="text-2xl underline">Docs</a>
                <a href="/support" className="text-2xl underline pl-3">Support</a>
            </div>*/}
            <Menu as="div" className="relative inline text-left navMenuUser">
                <Menu.Button className="cursor-pointer text-center">
                    <img className="w-10 float- right pl-2" src="/icons/expand.svg" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className={`${colors.defaultBackground} z-10 absolute right-0 w-56 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                                            } group rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer block`}
                                        href="/account/manage"
                                    >
                                        <div className="text-2xl block">
                                            Manage Account
                                        </div>
                                        <div className="text-light block">
                                            your account settings, and all that...
                                        </div>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                                            } group rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer block`}
                                        href="/account/content"
                                    >
                                        <div className="text-2xl block">
                                            Manage Content
                                        </div>
                                        <div className="text-light block">
                                            all your uploaded custom content and drafted custom content
                                        </div>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                                            } group rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer block`}
                                        href="/api/oauth/logout"
                                    >
                                        <div className="text-2xl block">
                                            Logout
                                        </div>
                                        <div className="text-light block">
                                            logout of your account. you know, logout?
                                        </div>
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};