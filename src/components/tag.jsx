

const Tag = ({tag:content}) => {
    const colors = ['#BD560BB2', '#1C92FFB0',"#FE1A1AB5" ,"#BD560BB2", '#00D991A1',"#00B2D9CC"];
    const colorIndex = Math.floor(Math.random() * colors.length); // Generate random color index
    const randomColor = colors[colorIndex];
  return (
    <li>
    <span
        className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[${randomColor}] px-2.5 text-sm capitalize text-[#F4F5F6]`}>{content}</span>
</li>
  )
}

export default Tag