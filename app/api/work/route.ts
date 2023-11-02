import { NextResponse } from "next/server";



interface workItem {
    // 이미지는 주소라 strign
    img: string;
    descTitle: string;
    desc: string;
    keyword: string[];
    color: string[];
    font: string;
    tools: string[];
    date: string;
    contribution: string;
    type: string;
    original?: string;
    create: string;
    git: string
}

interface workData {
    data: workItem[];
}

export async function GET(): Promise<NextResponse> {
    const data: workItem[] = [
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxx사이트 클론 코딩1",
            desc: "xxx사이트 클론 코딩1",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "팀프로젝트1",
            desc: "팀프로젝트1",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "project",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "웹앱1",
            desc: "웹앱1",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "webapp",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxx사이트 클론 코딩2",
            desc: "xxx사이트 클론 코딩2",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "팀프로젝트2",
            desc: "팀프로젝트2",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "project",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "웹앱2",
            desc: "웹앱2",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "webapp",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxx사이트 클론 코딩3",
            desc: "xxx사이트 클론 코딩3",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "팀프로젝트3",
            desc: "팀프로젝트3",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "project",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "웹앱3",
            desc: "웹앱3",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "webapp",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "xxx사이트 클론 코딩4",
            desc: "xxx사이트 클론 코딩4",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "팀프로젝트4",
            desc: "팀프로젝트4",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "project",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "웹앱4",
            desc: "웹앱4",
            keyword: ["#심플", "#깔끔" , "#반응형"],
            color: ["orange" , "orangered" , "darkorange"],
            font: "Noto Sans KR",
            tools: ["Figma" , "VS CODE", "GIT"],
            date: "5일",
            contribution: "100%",
            type: "webapp",
            original : "https://www.subway.co.kr",
            create: "https://www.naver.com",
            git: "https://www.github.com"
        }


    ]
    return NextResponse.json({ data } as workData);

}

