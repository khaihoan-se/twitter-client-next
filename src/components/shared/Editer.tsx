import React, { useState, useRef } from 'react'
import Avatar from './Avatar'
import { Editor, EditorState, convertToRaw, ContentState } from 'draft-js'
import { changeText } from '@/utils';
import ReactHtmlParser from 'react-html-parser'
import TheEarthIcon from '../icons/TheEarthIcon';
const TweetPost = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [newPost, setNewPost] = useState<any>([])
    const editor = useRef<HTMLDivElement>(null);
    // console.log(convertToRaw(editorState.getCurrentContent()).blocks);
    const handleSubText = () => {
        if (editor.current !== null) {
            editor.current.focus();
        }
    }
    const handleSubmitData = () => {
        setNewPost(convertToRaw(editorState.getCurrentContent()).blocks)
        const editor = EditorState.push(editorState, ContentState.createFromText(''), 'remove-range'); // Reset Input Editor
        setEditorState(editor)
    }
    
    return (
        <React.Fragment>
            <div className='bg-th-background py-[4px] max-h-[100vh] h-auto'>
                <div className='px-[14px] w-full h-full'>
                    <div className='flex-row flex'>
                        <div className='pt-[4px] basis-[43px] mr-[11px] grow-0'>
                            <Avatar src='/unnamed.gif' className='w-[43px] h-[43px]' />
                        </div>
                        <div className='pt-[4px] w-full h-full'>
                            <div className='min-h-[45px] w-full h-full flex items-center relative' onClick={handleSubText}>
                                <Editor editorState={editorState} 
                                    onChange={setEditorState} 
                                    placeholder="What’s happening?" 
                                />
                            </div>
                            <div className='w-full ml-[-8px] border-b-[1px] border-tt-border-color'>
                                <div className='pb-[12px] min-h-[24px] text-tt-main-color font-bold text-[15px] items-center'>
                                    <div className='hover:bg-[#1d9bf01a] inline-flex items-center py-[2px] px-[12px] rounded-full cursor-pointer'  onClick={handleSubmitData}>
                                        <TheEarthIcon className='w-[16px] h-[16px] mr-[4px]' />
                                        <span>Everyone can reply</span>
                                    </div>
                                </div>
                            </div>
                            {/* <button onClick={handleSubmitData}>sub</button> */}
                            <div>
                                {newPost.map((item: any, index: number) => (
                                    <p className='text-[15px]' key={index}>
                                        {ReactHtmlParser(changeText(item.text))}
                                    </p>
                                ))}
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(TweetPost)