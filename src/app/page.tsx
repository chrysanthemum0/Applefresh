import Link from "next/link";

export default function Home() {
  let name = 'JIN'; 
  let link = 'https://github.com/chrysanthemum0'; 

  return (
    <>
    <div className="container">
      <h4 className="title">Apple Fresh</h4>
      <p className="sub-title">BY DEV { name }</p>
      <Link className="link" href={ link }>Github LINK</Link>
    </div>
    </>
  )
}
