import { ImgHTMLAttributes } from "react";

const imagePath = require(process.env.PUBLIC_URL+"/logo_exercisor_round.svg");


export default function LogoExercisorRound(props: ImgHTMLAttributes<HTMLImageElement>){
    return (
        <img src={imagePath} {...props} />
    )
}