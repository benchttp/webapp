import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'shared/hooks/store'
import { fetchGithubToken, selectAuth } from './auth'

export const OauthGithub: FC = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const auth = useAppSelector(selectAuth)
  useEffect(() => {
    const githubCode = searchParams.get('code')
    githubCode && dispatch(fetchGithubToken(githubCode))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <></>
}
