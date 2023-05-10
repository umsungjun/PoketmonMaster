import styled from '@emotion/styled'
import React from 'react'
import { FiShare } from 'react-icons/fi'

interface KakaoShareButtonProps {
    poketmonName: string
}

const Kakao = (window as any).Kakao

export default function KakaoShareButton({ poketmonName }: KakaoShareButtonProps) {
    const currentURL = `https://www.naver.com`

    const shareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '😺 예비집사 판별기 결과😸',
                description: `테스트`,
                imageUrl:
                    'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link: {
                    mobileWebUrl: currentURL,
                    webUrl: currentURL,
                },
            },

            social: {
                likeCount: 10,
                commentCount: 20,
                sharedCount: 30,
            },
            buttons: [
                {
                    title: '나도 테스트하러가기',
                    link: {
                        mobileWebUrl: currentURL,
                        webUrl: currentURL,
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
