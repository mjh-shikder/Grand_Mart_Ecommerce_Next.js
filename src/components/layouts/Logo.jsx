import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image alt='logo-grand-mart' src={'/assets/Grand-Mart-Logo.png'} width={400} height={60} />
        </Link>
    );
};

export default Logo;