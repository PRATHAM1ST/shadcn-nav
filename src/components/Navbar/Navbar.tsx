import React from "react";
import { Button } from "../../shadcn-components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../../shadcn-components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

interface ItemsProps {
	name: string;
	path: string;
	icon?: string;
	children?: ItemsProps[];
	primary?: boolean;
}

interface NavbarProps {
	items: ItemsProps[];
}

export default function Navbar({ items }: NavbarProps) {
	return (
		<header>
			{items.map((item, index) => {
				return item.children ? (
					<DropdownMenu key={item.name + index}>
						<DropdownMenuTrigger asChild>
							<Button variant="link">
								{item.name}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{item.children.map((child, index) => (
								<Button variant="link" key={child.name + index}>
									{child.name}
								</Button>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<a href={item.path} key={item.name + index}>
						<Button variant="link">{item.name}</Button>
					</a>
				);
			})}
		</header>
	);
}
