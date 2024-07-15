import gradientString from 'gradient-string';
import { TITLE_TEXT } from '@consts/consts'

const Theme = gradientString([
    "#3139FB",
    "#1F28FF"
  ]);

export const renderTitle = () => {
    const coolString = Theme(TITLE_TEXT);
    console.log(coolString);
}