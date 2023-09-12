import React from 'react';
import styles from './KNavBar.module.css';
import logoSvg from '../../assets/AIPMS.png';
import * as data from '../links.json';
import styled from 'styled-components';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
}

const LinkContainer = styled.div`
    color: white;
    text-decoration: none;
    font-size: 15px;
`

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {
                links.map((link: Link) => {
                    return (
                        <div key={link.href} className={styles['k-link']}>
                            <LinkContainer>
                                {link.label}
                            </LinkContainer>
                        </div>
                    )
                })
            }
        </div>
    )

}

const KNavBar: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img className={styles['logo-image']} src={logoSvg} alt="Logo" />
            </div>
            <Links links={links}></Links>
        </nav>
    )
}

export default KNavBar;