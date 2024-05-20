"use client";
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button
} from "@nextui-org/react";
import PropsLenguage from "../utils/lenguage";
import DropDownComponent from "../dropDown/DropDownComponent";

export default function NavBar({ lenguage, handleLenguageChange }: PropsLenguage) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<number>(1);

    const menuItemsEs = [
        { id: 1, name: "Inicio", link: "#home" },
        { id: 2, name: "Tecnologías", link: "#technologies" },
        { id: 3, name: "Acerca de mí", link: "#about" },
        { id: 4, name: "Proyectos", link: "#project" },
        { id: 5, name: "Experiencia", link: "#experience" },
    ];

    const menuItemsEn = [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "Technologies", link: "#technologies" },
        { id: 3, name: "About", link: "#about" },
        { id: 4, name: "Projects", link: "#project" },
        { id: 5, name: "Experience", link: "#experience" },
    ];

    const handleItemClick = (index: number) => {
        setSelectedItem(index);
        setIsMenuOpen(false);
    };

    const menuItems = lenguage === 'Es' ? menuItemsEs : menuItemsEn;

    return (

        <Navbar
            className="bg-gray-200 bg-opacity-30 shadow-md shadow-gray-400 fixed"
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="full"
        >
            <NavbarContent className="w-full flex justify-between items-center">
                <NavbarBrand>
                    <p className="font-bold text-inherit text-2xl text-violet-900">Lucas.dev</p>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />

            </NavbarContent>
            <NavbarContent className="hidden md:flex items-center justify-items-end gap-8" >
                {menuItems.map((item) => (
                    <NavbarItem key={item.id}>
                        <Link
                            className={`w-full text-xl ${selectedItem === item.id ? 'font-bold text-violet-900' : 'text-black'}`}
                            href={item.link}
                            id={item.name}
                            size="lg"
                            onClick={() => handleItemClick(item.id)}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <DropDownComponent
                        lenguage={lenguage}
                        handleLenguageChange={handleLenguageChange}
                    />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem key={item.id}>
                        <Link
                            className={`w-full ${selectedItem === item.id ? 'font-bold text-violet-900' : 'text-black'}`}
                            href={item.link}
                            id={item.name}
                            size="lg"
                            onClick={() => handleItemClick(item.id)}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <DropDownComponent
                        lenguage={lenguage}
                        handleLenguageChange={handleLenguageChange}
                    />
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>

    );
}
