'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

interface workItem {
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


export default function Work() {
    const [isActive, setIsActive] = useState<number>(0)
    const [workList, setWorkList] = useState<workItem[]>([]);
    const [cateGory, setCateGory] = useState<string>("전체")


    const menuArray = ["전체", "클론", "팀프로젝트", "웹앱"];
    const menuType = ["전체", "Clone" , "Project", "Webapp"];
  
    useEffect(() => {
       
        
        const fetchData = async () => {
            try {
                const res = await fetch("/api/work");
                const data = await res.json();
                // console.log(data)
                setWorkList(data.data)
                // filterType()
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData()
    }, []);
    // const filterType = (type:string) => {
    //     if (type === "전체") {
    //       // "전체"를 선택한 경우, 모든 작업 항목을 표시
    //       setWorkList();
    //     } else {
    //         // 아닐경우 menuType으로 필터
    //       const filterList = menuType.filter((e) => e);
    //       setWorkList(filterList:string);
    //     }
    //   };
    
    // const FilterGugun = [...new Set(allData && allData.map((e)=> e.GUGUN_NM))];
    // const FilterData = data && data.filter(e =>{
    //   // gugun이 전체 또는 gugun이 e.GUUGN_NM 일때 필터 
      
    //   return gugun === "전체" || gugun === e.GUGUN_NM 

    // })
   
    const FilterCateGory = workList && workList.filter((e,i)=>{
        return cateGory  === "전체" ||  cateGory === e.type        
    });


 
    return (
        <>
        {cateGory}
            <div className="max-w-7xl mx-auto mt-8">
                <ul className="flex m-4 ml-0">
                    {
                        menuArray.map((e, i) => {
                            return (

                                // menuType이랑 
                                    
                                // 클릭했을 때 색상이 넘어가게 만들기 
                                <li key={i}  onClick={()=> {setIsActive(i); setCateGory(menuType[i])}} className={`${isActive === i ? 'bg-orange-500 text-white' : 'bg-white text-black'} cursor-pointer mr-4 border dark:bg-[#272929] dark:text-[#ebf4f1] py-2 px-5 rounded-md`}>
                                    {e}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="mt-8 ">
                {
                    workList.filter((e)=>cateGory === "전체" || cateGory === e.type).map((e,i)=>{
                        return(
                             <div key={i} className="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border flex-wrap">
                                <div className="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2">
                                    <div>
                                        {/* 용량압축 모바일 최적화 이미지 로딩까지 다 들어가 있음 자동 최적화*/}
                                    <Image width={500} height={500}  src="/images/mokup-1.png" alt="1" className="w-full"/>
                                    </div>
                                    <div>
                                    <Image width={500} height={500}  src="/images/mokup-2.png" alt="1" className="w-full"/>
                                    </div>
                                    <div>
                                    <Image width={500} height={500}  src="/images/mokup-3.png" alt="1" className="w-full"/>
                                    </div>
                                </div>
                                <div className="basis-[52%] group-even:order-2 xl:group-even:order-1 pt-10">
                                    <h3 className="text-2xl font-bold py-2.5 lg:pl-[50px]">{e.descTitle}</h3>
                                    <p className="text-base py-2.5 lg:pl-[50px]">{e.desc}</p>
                                    <p className="text-base py-2.5 lg:pl-[50px]">키워드 : {e.keyword}</p>
                                    <p className="text-base py-2.5 lg:pl-[50px]">컬러 : {
                                    e.color.map((el,idx)=>{
                                        return(
                                            <span className="w-5 h-5 inline-block align-middle mr-2" key={idx} style={{background: el, marginLeft:"5px"}}></span>
                                        )
                                    })}
                                    </p>
                                    <p className="text-base py-2.5 lg:pl-[50px]">폰트 : {e.font}</p>
                                    <p className="text-base py-2.5 lg:pl-[50px]">사용툴 : {e.tools}</p>
                                    <p className="text-base py-2.5 lg:pl-[50px]">작업기간 : {e.date}</p>
                                    <p className="text-base py-2.5 lg:pl-[50px]">기여도 : {e.contribution}</p>
                              
                                {/* rel 페이지를 눌렀을때 정보를 같이 넘길건지 안넘길건지  */}
                                <ul className="flex justify-center mt-6">
                                    <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.original} target="_blank" rel="noopener noreferrer">Orginal</a></li>
                                    <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.create} target="_blank" rel="noopener noreferrer">Create</a></li>
                                    <li className="py-1 px-8 border rounded-md text-sm"><a href={e.git} target="_blank" rel="noopener noreferrer">Git</a></li>
                                </ul>
                                </div>
                             </div>
                        )

                    })
                }
                </div>
            </div>
        </>

    )

}