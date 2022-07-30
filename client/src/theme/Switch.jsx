import React, { useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switch = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    }
  return (
    <div>
        <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        className="mx-4"
        />
    </div>
  )
}

export default Switch