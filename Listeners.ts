import {
	Dispatch,
	SetStateAction,
	SyntheticEvent
} from "react";



export const BigIntListener = (setValue: Dispatch<SetStateAction<bigint>>) =>{
	return (event : SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(BigInt(event.currentTarget.value));
	}
};

export const BooleanListener = (setValue: Dispatch<SetStateAction<boolean>>) =>{
	return (event : SyntheticEvent<HTMLInputElement>) => {
		if (event.currentTarget.value === "") {
			setValue(event.currentTarget.checked);
		} else {
			setValue(event.currentTarget.value === "true");
		}
	}
};

export const DateListener = (setValue: Dispatch<SetStateAction<Date>>) =>{
	return (event : SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(new Date(event.currentTarget.value));
	}
};

export const NumberListener = (setValue: Dispatch<SetStateAction<number>>) =>{
	return (event : SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(Number(event.currentTarget.value));
	}
};

export const StringListener = (setValue: Dispatch<SetStateAction<string>>) =>{
	return (event : SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(event.currentTarget.value);
	}
};