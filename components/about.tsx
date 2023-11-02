'use client'
import React, { useEffect, useState } from "react";

interface AboutItem {
    title: string;
    desc?: string;
    desc2?: string;
    date?: string[];
    dateDesc?: string[];

}

export default function About() {

    const [itemList, setItemList] = useState<AboutItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/portfolio?type=about");
                // json으로 받음
                const data = await res.json();
                setItemList(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, []);

    return (
        <>
            {
                itemList.map((e, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className="bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0">
                                <h3 className="text-base md:text-lg mb-4" key={i}>{e.title}</h3>
                                {
                                    // e.desc가 있을때만 태그가 나와줘야 해서 e.desc가 있다면 &&을 붙여준것.
                                    e.desc && <p className="mb-2 last:md-0 text-sm md:text-base"><span className="font-bold">{e.desc}</span>{e.desc2}</p>
                                }   
                                {/* e.date?.map을 해주거나 e.date &&를 해주거나 */}
                                {e.date &&
                                    e.date.map((el, index) => (
                                        <p className="mb-2 last:md-0 text-sm md:text-base" key={index}>
                                            {el} : {e.dateDesc && <span>{e.dateDesc[index]}</span>} 
                                        </p>
                                    ))} 
                            </div>
                        </React.Fragment>
                    )
                })
            }




        </>
    )


} 