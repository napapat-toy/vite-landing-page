// eslint-disable-next-line react/prop-types
const ArticleCard = ({ article: { name, article, img, author } }) => {
  return (
    <div className="group flex flex-col w-[240px] bg-[#FAF2D3] p-4 rounded-xl cursor-pointer hover:drop-shadow-xl ease-out duration-300">
      <div className="flex">
        <img src={author} alt={name} width={40} height={40} className="rounded-full object-contain" />
        <h1 className="text-gray-800 font-bold text-2xl ml-2 capitalize group-hover:underline">{name}</h1>
      </div>
      <p className="text-gray-500 font-semibold text-lg mt-2">{article}</p>
      <div className="p-4 mt-4 ">
        <img src={img} alt={name} width={240} height={240} className="w-full object-contain rounded-xl" />
      </div>
    </div>
  )
}

export default ArticleCard