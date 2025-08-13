import Link from "next/link";

export default function Header() {

    const Style = 'w-full border-b min-w-[700px] fixed';

    return(
        <header className={Style}>
            <HeaderContent/>
        </header>
    )
}

function HeaderContent() {

    const Style = 'w-[80%] py-4 flex justify-between m-auto items-center';

    const title_Style = 'text-[20px] font-[600]';
    const list_Style = 'flex gap-[30px]';

    return (
        <div className={Style}>
           <Link href={'/'} className={title_Style}>PORTFOLIO</Link>

           <ul className={list_Style}>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/'}>About</Link></li>
            <li><Link href={'/'}>Skills</Link></li>
            <li><Link href={'/'}>Projects</Link></li>
            <li><Link href={'/'}>Contact</Link></li>    
           </ul>
        </div>
    )
}