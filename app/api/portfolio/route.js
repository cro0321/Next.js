import { NextResponse } from "next/server";




export async function GET()  {
    const data = [
        {
            "adress": "https://team-puripuri.vercel.app/",
            "src": "/Images/puripuriB.png",
            "alt": "puripuri",
            "title": "puripuri 팀 프로젝트",
            "date": "2023.09.04~2023.10.06",
            "skill": "react tailwind CSS",
            "desc": "openAPI를 이용한 유기동물 후원/공고사이트",
            "percent": "기여도 20%"
        },
        {
            "adress": "https://team-puripuri.vercel.app/",
            "src": "/Images/bingB.png",
            "alt": "bing",
            "title": "binggrae 클론코딩",
            "date": "2023.08.01~2023.09.01",
            "skill": "html css js",
            "desc": "react tailwind CSS로 리팩토리진행중",
            "percent": "기여도 100%"
        },
        {
            "adress": "https://team-puripuri.vercel.app/",
            "src": "/Images/sandwichB.png",
            "alt": "subway",
            "title": "subway 클론코딩",
            "date": "2023.07.01~2023.07.14",
            "skill": "html css js",
            "desc": "react tailwind CSS로 리팩토리진행중",
            "percent": "기여도 100%"
        },
        {
            "adress": "https://parcel-react-pi.vercel.app/",
            "src": "/Images/sandwichB.png",
            "alt": "subway",
            "title": "subway 클론코딩",
            "date": "2023.07.01~2023.07.14",
            "skill": "html css js",
            "desc": "react tailwind CSS로 리팩토리진행중",
            "percent": "기여도 100%"
        }
    ]
    return NextResponse.json({data})

}

