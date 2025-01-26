"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CartItem = {
	id: string;
	title: string;
	price: string;
	img: string;
};

type CartContextType = {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	// Load cart from localStorage on component mount
	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (item: CartItem) => {
		if (cart.find((cartItem) => cartItem.id === item.id)) {
			toast.info(`${item.title} is already in your cart!`);
			return;
		}

		setCart((prev) => [...prev, item]);
		toast.success(`${item.title} added to cart!`);
	};

	const removeFromCart = (id: string) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
		toast.warn(`Item removed from cart.`);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
