import styled from '@emotion/styled'
import React from 'react'
import { FiShare } from 'react-icons/fi'

interface KakaoShareButtonProps {
    poketmonName: string
}

const Kakao = (window as any).Kakao

export default function KakaoShareButton({ poketmonName }: KakaoShareButtonProps) {
    const currentURL = `https://poketmon-master-kvmw0gdlc-umsungjun.vercel.app/poketmon/${poketmonName}`

    const shareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '포켓몬 마스터',
                description: 'test',
                imageUrl:
                    'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link: {
                    mobileWebUrl: `https://www.naver.com/`,
                    webUrl: `https://www.naver.com/`,
                },
            },
            social: {
                likeCount: 10,
                commentCount: 20,
                sharedCount: 30,
            },
            buttons: [
                {
                    title: '포켓몬 구경하러가기',
                    link: {
                        mobileWebUrl: `https://www.naver.com/`,
                        webUrl: `https://www.naver.com/`,
                    },
                },
            ],
        })
    }

    return (
        <ShareBox>
            <ShareButton onClick={() => shareKakao()}>
                공유하기
                <FiShare />
            </ShareButton>
        </ShareBox>
    )
}

const ShareBox = styled.div`
    display: flex;
    justify-content: flex-end;
`

const ShareButton = styled.button`
    margin: 1rem 1rem 0 0;
    cursor: pointer;
`
