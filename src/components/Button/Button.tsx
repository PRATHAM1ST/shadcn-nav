import React from "react";
import "./Button.css";

interface ButtonProps {
	children?: React.ReactNode;
	onClick?: () => void;
}

export default function Button({ onClick, children }: ButtonProps) {
	return <button onClick={onClick}>{children}</button>;
}
