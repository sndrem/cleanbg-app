import { useNavigate, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";

export default function SelectColor() {
  const { hex } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(hex);

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
    <>
      <ChromePicker color={selectedColor!} onChange={onChange} />
    </>
  );
}
