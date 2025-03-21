import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, animateScroll as scroll} from 'react-scroll';
import {Icon} from "./Icon";

export const GoToTopBtn = () => {

    let [showBtn, setShowBtn] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    setShowBtn(true)
                } else {
                    setShowBtn(false)
                }
            })
        }, []
    )

    return (
        <>
            {showBtn && (<S_GoToTopBtn>
                <Link
                    smooth={true} // Плавная прокрутка
                    onClick={scrollToTop}
                >
                    <Icon iconId={'arrowUp'} height="64px" width="64px" viewBox="0 0 330 330"/>
                </Link>
            </S_GoToTopBtn>)
            }
        </>
    );
};

const S_GoToTopBtn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(251, 63, 92, 0.32);

  ${(props) => props.theme.media.small} {
    bottom: 30px;
    right: 30px;
    width: 70px;
    height: 70px;
  }
`