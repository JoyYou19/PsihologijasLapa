import { getUsers, loginUser } from "@/lib/db";

export default async function Page() {

  return (
  <div>
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-white text-5xl font-bold">Atrodi pareizo palīdzību!</h1>
      <p className="mb-5">.</p>
      <button className="btn btn-primary">Meklēt</button>
    </div>
  </div>
</div>
  </div>
    )
}
