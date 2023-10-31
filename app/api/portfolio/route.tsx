import { NextResponse } from "next/server";




export async function GET()  {
    const data = [
    
        {
            "adress": "https://parcel-react-pi.vercel.app/",
            "src": "/Images/parcel.png",
            "alt": "parcel",
            "title": "택배조회 사이트",
            "date": "2023.07.01~2023.07.14",
            "skill": "html tailwind react ",
            "desc": "국내/국외 택배 정보 조회 사이트",
            "percent": "기여도 100%"
        }
    
    ]
    return NextResponse.json({data})

}

