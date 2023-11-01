'use client'
import { useEffect, useState } from "react";



interface SkillItem {
    title: string;
    progressBefore: number;
    progressAfter: number;
    desc: string;
}




export default function Skills() {
    const [skillList, setSkillList] = useState<SkillItem[]>([]);
    const [progress, setProgress] = useState<number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/skill");
                const data = await res.json();
                // console.log(data)
                setSkillList(data.data);
                const progressBefore = skillList.map((e :any) => e.progressBefore);
                setProgress(progressBefore);
                setTimeout(() => {
                    setProgress(data.data.map((e : any) => e.progressAfter));
                }, 1000); 
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, []);
    return (
        <>
           {skillList.map((e, i) => (
                <div className="w-full h-20" key={i}>
                    <div className="w-full h-5 bg-[#e0e0de] rounded-[50px]">
                        {/* progress 상태를 사용하여 프로그레스 바의 너비를 동적으로 설정합니다. */}
                        <div
                            className="h-full bg-blue-400 duration-1000 ease-out rounded-[50px] text-right relative mb-3 first:mt-10"
                            style={{ width: progress[i] + "%" }}
                        >
                            <p className="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">
                                {e.title}
                            </p>
                        </div>
                        <p className="text-sm md:text-base mt-1">{e.desc}</p>
                    </div>
                </div>
            ))}


        </>
    )

}