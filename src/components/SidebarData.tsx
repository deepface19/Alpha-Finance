import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import * as RiIcons  from "react-icons/ri";
import * as SiIcons from 'react-icons/si'
import * as MdIcons from 'react-icons/md'
import * as GoIcons from 'react-icons/go'
export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon:  <FaIcons.FaHome />
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon:  <SiIcons.SiGoogleanalytics />
    },
    {
        title: 'Loan',
        path: '/loan',
        icon: <FaIcons.FaMoneyBillAlt />
    },
    {
        title:'Fiat Gateways',
        path: '/fiatgateways',
        icon: <FaIcons.FaCreditCard />
    },
    {
        title: 'Protect Transaction',
        path: '/protecttransaction',
        icon: <RiIcons.RiSecurePaymentFill />
    },
    {
        title: 'Protect Wallet ',
        path: '/protectwallet',
        icon: <MdIcons.MdSecurity />
    },
    {
        title:'Crypto World',
        path:'/cryptoworld',
        icon: <GoIcons.GoLocation />

    },
]