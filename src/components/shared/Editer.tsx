import React, { useState, useRef } from 'react'
import Avatar from './Avatar'
import { Editor, EditorState, convertToRaw, ContentState } from 'draft-js'
import TheEarthIcon from '../icons/TheEarthIcon';
import ToolEditer from './ToolEditer';
import classNames from 'classnames';
import ValuePhoto from './ValuePhoto';
import NoticeByPhoto from './NoticeByPhoto';
import { useDispatch } from 'react-redux'
import { addPost } from '@/redux/actions/postAction';
import axios from 'axios';

const Editer = () => {
    const dispatch = useDispatch()

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [newPost, setNewPost] = useState<any>('')

    const [check, setCheck] = useState<boolean>(false)

    const [preview, setPreview] = useState<string[]>([])
    const [images, setImages] = useState('')
    const fileobj: any = [];

    const editor = useRef<HTMLDivElement>(null);
    // console.log(convertToRaw(editorState.getCurrentContent()).blocks);
    const handleSubText = () => {
        if (editor.current !== null) {
            editor.current.focus();
        }
    }
    /* Change Photo */
    const onImageChange = (event: any) => {
        setImages(event.target.files)
        let files = event.target.files;
        fileobj.push(files);
        let reader;
        
        for (var i = 0; i < fileobj[0].length; i++) {
            reader = new FileReader();
            reader.readAsDataURL(fileobj[0][i]);
            reader.onload = (event: any) => {
                preview.push(event.target.result);   // update the array instead of replacing the entire value of preview

                setPreview([...preview]); // spread into a new array to trigger rerender
            } 
        }
    }
    /* check the number of photos */
    (() => {
        if(preview.length > 4){
            setPreview([])
            setCheck(true)
            return true
        } 
    })()
    /* pile of notifications after 3 seconds */
    setTimeout(() => {
        setCheck(false)
    }, 3000)
    /* check the number of characters */
    const checkLenthInput = () => {
        const post = convertToRaw(editorState.getCurrentContent()).blocks
        if(post[0].text == '' && preview.length == 0){
            return true
        }        
    }
    /* handleRemoveItem */
    const handleRemoveItem = (index: number) => {
        setPreview([
            ...preview.slice(0, index),
            ...preview.slice(index + 1, preview.length),
        ])
    }
    // test
    const apiUrl = 'http://localhost:5000/api/';

    const singleFileUpload = async (data: any, options: any) => {
        try {
            await axios.post(apiUrl + 'create-post', data, options);
        } catch (error) {
            throw error;
        }
    }
    const [multipleProgress, setMultipleProgress] = useState(0);

    const mulitpleFileOptions = {
        onUploadProgress: (progressEvent: any) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        },
        headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTI5NjcyNGE4OGYwMjZkYzJkMmVhMyIsImlhdCI6MTY1OTU0MzE2OSwiZXhwIjoxNjU5NjI5NTY5fQ.ppLPVZivkO8rgkHKfFN0d_pQGNGwhmeUQUOjOzga92Y',
            Accept: '*/*',

        }
    }
    /* Handle Submit data */
    
    const handleSubmitData = async () => {
        setNewPost(convertToRaw(editorState.getCurrentContent()).blocks)
        const data = {
            description: convertToRaw(editorState.getCurrentContent()).blocks,
            images: preview
        }
        // console.log(data.description);
        
        dispatch(addPost(data))
        const formData: any = new FormData();
        for (let j = 0; j < data.description.length; j++) {
            formData.append('key', data.description[j].key)
            formData.append('text', data.description[j].text)
        }
        // formData.append('description', newPost)
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
        
        await singleFileUpload(formData, mulitpleFileOptions)
        const editor = EditorState.push(editorState, ContentState.createFromText(''), 'remove-range'); // Reset Input Editor
        setEditorState(editor)
        setPreview([])
    }
    
    return (
        <React.Fragment>
            <div className='bg-th-background py-[4px] h-auto'>
                <div className='px-[14px] w-full h-full border-b-[1px] border-tt-border-color'>
                    <div className='flex-row flex'>
                        <div className='pt-[4px] basis-[43px] mr-[11px] grow-0'>
                            <Avatar src='/unnamed.gif' className='w-[43px] h-[43px]' />
                        </div>
                        <div className='pt-[4px] w-full h-full'>
                            {/* Rich Text Editor */}
                            <div className='min-h-[45px] w-full h-full flex items-center relative' onClick={handleSubText}>
                                <Editor editorState={editorState} 
                                    onChange={setEditorState} 
                                    placeholder="What’s happening?" 
                                />
                            </div>
                            {preview.length > 0 && <ValuePhoto photos={preview} handleRemoveItem={handleRemoveItem} />}
                            {/* Everyone can reply */}
                            <div className='w-full ml-[-8px] border-b-[1px] border-tt-border-color'>
                                <div className='pb-[12px] min-h-[24px] text-tt-main-color font-bold text-[15px] items-center'>
                                    <div className='hover:bg-tt-hover-maincl-color inline-flex items-center py-[2px] px-[12px] rounded-full cursor-pointer'>
                                        <TheEarthIcon className='w-[16px] h-[16px] mr-[4px]' />
                                        <span>Everyone can reply</span>
                                    </div>
                                </div>
                            </div>
                            {/* Tab Tools */}
                            <div>
                                <div className='flex-wrap z-[1] flex items-center justify-between flex-row bg-tt-bg-color mb-[16px]'>
                                    <ToolEditer onImageChange={onImageChange} />
                                    <div className={classNames(
                                        'mt-[12px] bg-tt-main-color ml-[12px] min-w-[36px] min-h-[36px] outline-none px-[16px] rounded-full flex items-center justify-center cursor-pointer',
                                        checkLenthInput() && 'opacity-50 pointer-events-none'
                                    )} onClick={handleSubmitData}>
                                        <div className='text-[#fff] font-bold text-[15px]'>
                                            <span>Tweet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                {check && <NoticeByPhoto notification='Please choose either 1 GIF or up to 4 photos.' />}
            </div>
        </React.Fragment>
    )
}

export default React.memo(Editer)