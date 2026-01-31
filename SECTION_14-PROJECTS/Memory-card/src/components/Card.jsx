export const Card=({card})=>{

return <div className="card w-full h-25 bg-slate-800 rounded-lg flex items-center justify-center text-4xl cursor-pointer hover:bg-slate-700 transition-all text-white border-2 border-slate-600">
    <div className="card-front">?</div>
    <div className="card-back">{card}
    </div>
</div>
}