import React, { useRef, useEffect, useState } from 'react';
import '../styles/dark.css'
const Dark = () => {

    const [Checked, setChecked] = useState(false)

    const ref = useRef(null)

    useEffect(() => {
        const mQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setChecked(mQuery.matches)
        //meddiaQuery.addListener(changeMedia)
    }, [])

    const changeMedia = (mQuery) => {
        if (mQuery.matches) {
            setChecked(true)
        }
    }

    const handleChange = (event) => {
        /*  console.log(event.target.checked); */
        let checked = ref.current.checked;
        console.log(checked);
        setChecked(checked)

        if (checked) {
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
        } else {
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }

    return (
        <>
            <div className="dark-mode">
                <p className="dark-mode-title">Dark Mode</p>
                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    checked={Checked}
                    ref={ref}
                    onChange={handleChange
                    }
                />
                {/* <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            </div>
            <div class="user-menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
                     */}
                <label className="switch" htmlFor="checkbox">

                </label>
            </div>
        </>
    );
}
export default Dark;