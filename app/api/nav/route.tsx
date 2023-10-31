import { NextResponse } from "next/server";
import { faUser, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface NavItem{
    name: string,
    link: string
}

interface NavData{
    data: NavItem[];
}

// Promise로 반환되고 
export async function GET() : Promise<NextResponse>  {
    const data: NavItem[]  = [
        {
            name : "소개",
            link : "/about",
            
        },
        {
            name : "스킬",
            link : "/skill"
        },
        {
            name : "포트폴리오",
            link : "/work"
        }

    ]
    return NextResponse.json({data} as NavData);

}

