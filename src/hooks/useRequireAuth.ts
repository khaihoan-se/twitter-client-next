import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import LoginApi from '@/api/LoginApi';
import useLocalStorage from './useLocalStorage';
import useSWR from 'swr'
import axios from 'axios';

const useRequireAuth = ({
    redirectTo = '',
    redirectIfFound = false,
} = {}) => {
    const router = useRouter();
    const [token, setToken] = useLocalStorage<string>('token', '')
    // const [ data, setData ] = useState<any>()
    // const bsurrl = 'http://localhost:5000/api/info'
    const fetcher = (bsurrl: string) => {
        return axios.get(bsurrl, {
            headers: {
                Authorization: token
            }
        })
    }
    const { data } = useSWR<any>('http://localhost:5000/api/info', fetcher)

    useEffect(() => {
        // if no redirect needed, just return (example: already on /dashboard)
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
        if (!redirectTo || !data) return
    
        if (
          // If redirectTo is set, redirect if the user was not found.
          (redirectTo && !redirectIfFound && !data?.islogin) ||
          // If redirectIfFound is also set, redirect if the user was found
          (redirectIfFound && data?.islogin)
        ) {
            
          router.push(redirectTo)
        }
      }, [data, redirectIfFound, redirectTo])
    
    return { data }
}

export default useRequireAuth