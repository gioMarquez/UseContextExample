import React, { useState, useContext, ReactNode } from "react";

interface User {
	name: string;
	email: string;
}

interface UserProviderProps {
	children: ReactNode;
}

const userContext = React.createContext<User | null>(null);
const userToogleContext = React.createContext(() => {});

export function useUserContext() {
	return useContext(userContext);
}

export function useUserToggleContext() {
	return useContext(userToogleContext);
}

export function UserProvider(props: UserProviderProps) {
	const [user, setUser] = useState<User | null>(null);

	const cambiarLogin = () => {
		if (user) {
			setUser(null);
		} else {
			setUser({
				name: "Luisillo",
				email: "luisilloelpillo69@gmail.com",
			});
		}
	};

	return (
		<userContext.Provider value={user}>
			<userToogleContext.Provider value={cambiarLogin}>
				{props.children}
			</userToogleContext.Provider>
		</userContext.Provider>
	);
}
