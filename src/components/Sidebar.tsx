import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'

import { SidebarData } from './SidebarData';

const Navbar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3.5rem;
    background-color: '#ffffff',
`
const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    margin-left: auto;
    color: #ffffff;
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ffffff;
`

const SidebarMenu = styled.div<{ close: boolean }>`
    width: 250px;
    height: 100vh;
    background: #120D23;
    position: fixed;
    top: 0;
    left: ${({ close }) => close ? '0' : '-100%'};
    transition: .6s;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 80px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    font-family: 'roboto','sans-serif';
    text-decoration: none;
    color: #868686;

    &:hover {
        background-color: #181E36;
        color: #FFFFFF;
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
`


const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)
    return (
        <>
            <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <HiIcons.HiMenuAlt1 />
                </MenuIconOpen>
            </Navbar>

            <SidebarMenu close={close}>
                <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{ marginLeft: '16px' }}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default Sidebar
