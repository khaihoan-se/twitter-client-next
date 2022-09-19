import React from 'react'

interface TextShowProps {
    text: string
}
const TextShow = ({ text }: TextShowProps) => {
    return (
        <span className='px-[4px] py-[2px] bg-slate-500 opacity-90 absolute top-[100%] left-1/2 translate-x-[-50%] text-[12px] rounded-sm text-white whitespace-nowrap z-40'>{text}</span>
    )
}

export default React.memo(TextShow)