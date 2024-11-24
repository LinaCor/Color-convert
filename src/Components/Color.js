import { useEffect } from 'react';
import './my-style.css'

function ColorFix({ color, setColor, rgbColor, setRgbColor }) {

  const handleChange = evt => {
    const value = evt.target.value;
    if (value.length === 1 && value !== '#') {
      evt.target.value = '#';
    }
    setColor(value);
  }

  function isValueValid(string) {
    const regHex = /^#[0-9a-f]{1,6}$/i;
    return regHex.test(string);
  }

  useEffect(() => {
    if (color.length >= 7 && isValueValid(color)) {
      let r = parseInt(color.slice(1, 3), 16);
      let g = parseInt(color.slice(3, 5), 16);
      let b = parseInt(color.slice(5, 7), 16);
      const rgbColorValue = `rgb(${r},${g},${b})`;
      setRgbColor(rgbColorValue)
    }
    else if (!isValueValid(color) && color.length >= 7) {
      setRgbColor('Цвета не существует :(');
    }
  }, [color, setRgbColor]);

  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Ошибка:', err);
    }
  };

  return (
    <>
      <div className="big-container" style={{ backgroundColor: `${color}` }}>
        <div className="color-container">
          <input className="color-container__input" onChange={handleChange} maxLength="7" />
          <div className="color-container__value">
            <p>{rgbColor}</p>
            <button className="value-btn" onClick={() => copyTextToClipboard(rgbColor)}></button>
          </div>
        </div>
      </div >
    </>
  )
}

export default ColorFix;

