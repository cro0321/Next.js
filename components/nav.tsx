'use client'
import { useEffect, useState } from "react";
import Link from "next/link"
import Logo from '/public/images/120x50.png';
import Image from "next/image";
import { GET } from "@/app/api/nav/route";
import { faUser, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Nav() {

    interface NavItem {
        name: string,
        link: string
    }

    interface NavData {
        data: NavItem[];
    }
    const icons = [faUser, faCode, faWindowMaximize];
    const [menuActive, setMenuAcitve] = useState<boolean>(false);
    const [menuList, setMenuList] = useState<NavItem[]>([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/portfolio?type=nav");
                const data = await res.json();
                // console.log(data)
                setMenuList(data.dataNav);
            } catch (error) {
                console.log(error);
            }

        }
        fetchData()
    }, []);

    const toggleMenu = () => {
        setMenuAcitve(!menuActive);
    }

    return (
        <>    
            <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-[49]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <Link href='/'>
                        <h1>
                            {/* Image에 가로세로값을 꼭 지정해 줘야 한다.  src */}
                            <Image width={120} height={50} src="https://via.placeholder.com/120x50" alt="로고" title="로고"></Image>
                            {/* <Image width={120} height={50} src={Logo} alt="로고" title="로고"></Image> */}
                        </h1>
                    </Link>
                    <div className="basis-3/4 hidden md:block">
                        <ul className="flex justify-around">
                            {
                                menuList.map((e, i) => {
                                    return (
                                        // react에서 map문은 새로운 배열을 반복돌리는것(원본은 유지되면서 새롭게 돌리는것)새로운 배열에 순서 고유값이 없어서 key값 고유값 index 값을 넣어주는것
                                        <li className="relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100" key={i}><Link href={e.link}>{e.name}</Link></li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {menuActive ? "클릭" : "햄버거"}
            <div className="fixed right-5 top-5 transition-all duration-500 z-[51] cursor-pointer md:hidden" onClick={toggleMenu}>
                <div className={`w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500 ${menuActive && "rotate-45 translate-y-[10px]"}`}></div>
                <div className={`w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500 ${menuActive && "opacity-0 -translate-x-8" }`}></div>
                <div className={`w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500 ${menuActive && "-rotate-45 -translate-y-[10px]" }`}></div>
            </div>

            {/* 현재 기본값이 right-0 이고 어떤 액션을 줬을때 -right-72를 해주면 이게 숨겨 지는데 기본값이 -right-72라면 숨겨져있는 상태에서 먼저 선행되는 코드에 의해 숨어져있는 상태에서 right-0을 주게 되면 나타나지지 않음 */}
            <div className={`w-72 h-full fixed -right-72 bg-gray-100 top-0 z-50 p-12 box-border transition-all duration-500 md:hidden ${menuActive  && "right-0"} `}>
                <div className="text-center mt-6"><Image src="https://via.placeholder.com/100" alt="100x100" title="100x100" width={100} height={100} className="mx-auto rounded-full mb-4" />
                    <ul className="mt-12">
                        {
                            menuList.map((e, i) => {
                                return (
                                    <li className="pt-5 pb-2 border-b hover:font-bold" key={i}><FontAwesomeIcon  className="mr-2" icon={icons[i]} /><Link href={e.link}>{e.name}</Link></li>

                                )
                            })
                        }
                    </ul>
                </div>
                <p className="pt-5 ">프론트엔드 개발자 홍길동</p>
            </div>


            {/* 
            rotate-45 translate-y-[7px]
            opacity-0 -translate-x-8
            -rotate-45 -translate-y-[7px]
        */}

        </>
    )

}