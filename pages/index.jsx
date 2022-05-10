import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
    const [fname, setName] = useState('');
    const [fmail, setMail] = useState('');
    const [flinkedin, setLinkedin] = useState('');
    const [fgmail, setGmail] = useState('');
    const [fpnumb, setPnumb] = useState('');
    const [fprofession, setProfession] = useState('');

    const [todoitem, settodoitem] = useState('');
    const [items, setitems] = useState([]);

    const handleadd = () => {
        if (todoitem) {
            setitems([...items, todoitem]);
            settodoitem('');
        }
    };

    const updatePnumb = (e) => {
        setPnumb(e.target.value);
    };
    const updateProfession = (e) => {
        setProfession(e.target.value);
    };
    const updateName = (e) => {
        setName(e.target.value);
    };
    const updateMail = (e) => {
        setMail(e.target.value);
    };
    const updateLinkedin = (e) => {
        setLinkedin(e.target.value);
    };
    const updateGmail = (e) => {
        setGmail(e.target.value);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.lowerContainer}>
                <div className={styles.leftSectionContainer}>
                    <div className={styles.attributeContainer}>
                        <div className={styles.attributeTitle}>Attributes:</div>
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
                                document.getElementById('profession').focus();
                            }}
                        >
                            Profession:
                            <input
                                id="profession"
                                type="text"
                                value={fprofession}
                                onChange={updateProfession}
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
                        <div
                            className={styles.attributeChild}
                            onClick={() => {
                                document.getElementById('linkedin').focus();
                            }}
                        >
                            Linkedin:
                            <input
                                id="linkedin"
                                type="text"
                                value={flinkedin}
                                onChange={updateLinkedin}
                            />
                        </div>
                        <div
                            className={styles.attributeChild}
                            onClick={() => {
                                document.getElementById('gmail').focus();
                            }}
                        >
                            Gmail:
                            <input
                                id="gmail"
                                type="text"
                                value={fgmail}
                                onChange={updateGmail}
                            />
                        </div>

                        <div
                            className={styles.attributeChild}
                            onClick={() => {
                                document.getElementById('pnumb').focus();
                            }}
                        >
                            Phone number:
                            <input
                                id="pnumb"
                                type="text"
                                value={fpnumb}
                                onChange={updatePnumb}
                            />
                        </div>
                        <div
                            className={styles.addLink}
                            onClick={() => {
                                document.getElementById('addlinks').focus();
                            }}
                        >
                            Additional Links:
                            <input
                                type="text"
                                value={todoitem}
                                id="addlinks"
                                onChange={(e) => settodoitem(e.target.value)}
                            />
                            <button type="button" onClick={handleadd}>
                                +
                            </button>
                            <ul>
                                {items.map((items) => (
                                    <li
                                        className={styles.attributeChildlist}
                                        key={items}
                                    >
                                        {items}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.middleSectionContainer}>
                    <div className={styles.templateContainer}>
                        <br />
                        <h1>{fname}</h1>
                        {fprofession}
                        <hr />
                        {
                            <div>
                                {items.map(function (d, idx) {
                                    return (
                                        <li className={styles.links} key={idx}>
                                            {d}
                                        </li>
                                    );
                                })}
                            </div>
                        }
                        <footer>
                            <hr /> <a href={`mailto:${fmail}`}>Mail</a>
                        </footer>
                    </div>
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
