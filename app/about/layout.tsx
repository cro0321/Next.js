export default function RootLayout(props:{ children : React.ReactNode}) {
    return (
        <>
        {/* 이 페이지 만의 어떤 특정한걸 적용해 줘야한다면  */}
            {/* <p>페이지 레이아웃</p> */}
            {/* 레이아웃의 자식요소를 의미한다. */}
            {props.children}
        </>
    )
}