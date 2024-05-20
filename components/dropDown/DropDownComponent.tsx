import {
    Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button
} from "@nextui-org/react";

interface Props {
    lenguage: string;
    handleLenguageChange?: any
}

function DropDownComponent({ lenguage, handleLenguageChange }: Props) {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                    color="secondary"
                >
                    {lenguage === 'Es' ? 'Español' : 'English'}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={new Set([lenguage === 'Es' ? 'es' : 'en'])}
                onSelectionChange={handleLenguageChange}
            >
                <DropdownItem key="es">Español</DropdownItem>
                <DropdownItem key="en">English</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropDownComponent;