import { ImgHTMLAttributes } from "react";
import logoExercisor from "./logo_exercisor.svg";

export default function Logo(props: ImgHTMLAttributes<HTMLImageElement>){
    return (
        <img src={logoExercisor} {...props}/>
    )
}