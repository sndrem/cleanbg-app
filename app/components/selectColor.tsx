import { useNavigate, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import type { ColorResult } from "react-color";
import { ChromePicker } from "react-color";

export default function SelectColor(): JSX.Element {
  const { hex } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(hex);
  const [visColorPicker, setVisColorPicker] = useState(true);

  function onChange(event: ColorResult) {
    setSelectedColor(event.hex);
    navigate(`/${encodeURIComponent(event.hex)}`, {
      replace: true,
    });
  }

  useEffect(() => {
    if (!selectedColor) return;
    const html = document.querySelector("html")!;
    html.style.background = selectedColor;
  }, [selectedColor]);

  return (
    <div className="color-picker-container">
      <button
        className="color-picker-button"
        onClick={() => setVisColorPicker(!visColorPicker)}
      >
        {visColorPicker ? "Skjul" : "Vis fargevelger"}
      </button>
      <div
        className={`${
          visColorPicker ? "show-color-picker" : "hide-color-picker"
        }`}
      >
        <ChromePicker disableAlpha color={selectedColor!} onChange={onChange} />
      </div>
    </div>
  );
}
