'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import Logo from '/public/images/120x50.png';
import Image from "next/image";
import { GET } from "@/app/api/nav/route";


export default function Nav() {
    //변수 설정 return 위에 react문법이랑 똑같이 써주면 됨
    // const defaultName = "홍길동";
    const [test, settest] = useState("테스트")
    
    type Nav= {
        name: string;
        link: string;
    };
    const [data, setData] = useState<Nav[]>([]);
    //   useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const res = await GET();
    //         // const data = res.data; 
    //         console.log(res)
    //         // setData(data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
      
    //     fetchData();
    //   }, []);
  
    useEffect(() => {
        fetch('/api/nav').then(res =>res.json())
        .then(data => setData(data.data))
      }, []);
  

    return (
        <>
        {/* {test} */}
            <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                 <Link href='/'>
                    <h1>
                        {/* image에 가로세로값을 꼭 지정해 줘야 한다.  src */}
                        <Image width={120} height={50} src="https://via.placeholder.com/120x50" alt="로고" title="로고"></Image>
                        {/* <Image width={120} height={50} src={Logo} alt="로고" title="로고"></Image> */}
                    </h1>
                 </Link>
                {/* <p onClick={()=>{settest("테스트2")}} ><span style={{fontWeight:"bold"}}>{defaultName}</span>의 포트폴리오입니다.</p> */}
      
                {
                    data.map((e,i)=>{
                        return(
                            <Link href={e.link} key={i}>{e.name}</Link>
                        )
                    })
                }
             
                 {/* <Link href='/about'>소개</Link>
                 <Link href='/skill'>스킬</Link>
                 <Link href='/work'>포트폴리오</Link>
                 <Link href='/contact'>컨텍트</Link> */}
                </div>
            </div>
        </>
    )

}