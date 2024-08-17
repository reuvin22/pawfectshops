import { createContext, useContext } from "react";

interface FormContext{
    data:any,
    state:any,
    initialField:string[],
    title: boolean,
    titleText: string
}
export const FormContext:any = createContext<FormContext>({
    data: null,
    state: null,
    initialField: [],
    title: false,
    titleText: ''
})

export const useFormContext = () => useContext(FormContext)