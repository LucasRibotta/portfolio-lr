"use client"
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
} from "@nextui-org/react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Number>(0);

    const menuItems = [
        { "name": "Inicio", "link": "#home" },
        { "name": "Tecnologías", "link": "#technologies" },
        { "name": "Acerca de mi", "link": "#about" },
        { "name": "Proyectos", "link": "#project" },
        { "name": "Experiencia", "link": "#experience" },

    ];

    const handleItemClick = (index: Number) => {
        setSelectedItem(index);
        setIsMenuOpen(false);
    };

    return (
        <Navbar
            className="w-full bg-gray-200 bg-opacity-30 shadow-md shadow-gray-400 fixed"
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="flex justify-between items-center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Lucas.dev</p>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarContent className="hidden md:flex gap-4" justify="end">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={`${item}-${index}`}>
                            <Link
                                className={`w-full ${selectedItem === index ? 'text-violet-900' : 'text-black'}`}
                                href={item.link}
                                id={item.name}
                                size="lg"
                                onClick={() => handleItemClick(index)}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className={`w-full ${selectedItem === index ? 'text-blue-500' : 'text-black'}`}
                            href={item.link}
                            size="lg"
                            id={item.name}
                            onClick={() => handleItemClick(index)}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
