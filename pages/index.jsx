import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
    const [fname, setName] = useState('');
    const [fmail, setMail] = useState('');
    const updateName = (e) => {
        setName(e.target.value);
    };
    const updateMail = (e) => {
        setMail(e.target.value);
    };
    return (
        <div className={styles.mainContainer}>
            <div className={styles.upperContainer}>
                <div className={styles.headContainer}>Resumify.</div>
            </div>
            <div className={styles.lowerContainer}>
                <div className={styles.leftSectionContainer}>
                    <div className={styles.attributeContainer}>
                        <div className={styles.attributeTitle}>Attributes</div>
                        <div
                            className={styles.attributeChild}
                            onClick={() => {
                                document.getElementById('name').focus();
                            }}
                        >
                            Full Name:
                            <input
                                id="name"
                                type="text"
                                value={fname}
                                onChange={updateName}
                            />
                        </div>
                        <div
                            className={styles.attributeChild}
                            onClick={() => {
                                document.getElementById('mail').focus();
                            }}
                        >
                            Mail:
                            <input
                                id="mail"
                                type="text"
                                value={fmail}
                                onChange={updateMail}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.middleSectionContainer}>
                    <div className={styles.templateContainer}>{fmail}</div>
                </div>
                <div className={styles.rightSectionContainer}>
                    <div className={styles.templateTagContainer}>Template</div>
                    <div className={styles.templatesStylesContainer}>
                        <div className={styles.templateContainer1}></div>
                        <div className={styles.templateContainer2}></div>
                        <div className={styles.templateContainer3}></div>
                    </div>
                    <div className={styles.themeTagContainer}>Theme</div>
                    <div className={styles.themesContainer}>
                        <div className={styles.themesContainer1}></div>
                        <div className={styles.themesContainer2}></div>
                        <div className={styles.themesContainer3}></div>
                        <div className={styles.themesContainer4}></div>
                        <div className={styles.themesContainer5}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
