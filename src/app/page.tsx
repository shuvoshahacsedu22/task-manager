import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <ul>
        <li>
      <Link href="/task"      
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>   
           <text > View Tasks </text>
          </Link>
          </li>
          <br></br>
          <li>
          <Link href="/profile" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Profile
          </Link>
          </li>
          </ul>
    </main>
  )
}
