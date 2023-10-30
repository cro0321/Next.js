import { NextResponse } from "next/server";




export async function GET()  {
    const data = [
        {
            name : "소개",
            link : "/about"
        },
        {
            name : "스킬",
            link : "/skill"
        },
        {
            name : "포트폴리오",
            link : "/work"
        },
        {
            name : "컨텍트",
            link : "/contact"
        }

    ]
    return NextResponse.json({data})

}

