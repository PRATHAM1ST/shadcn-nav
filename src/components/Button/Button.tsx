import React from "react";
import { Button as ShadcnButton } from "../../shadcn-components/ui/button";

interface ButtonProps {
	children?: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
	return <ShadcnButton>{children}</ShadcnButton>;
}
