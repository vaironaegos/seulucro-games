let col = {
    colors: [
        { code: 1, foreground: '#81c0ff', background: '#0064c8', multiplier: 2 },
        { code: 2, foreground: '#00551e', background: '#1ed760', multiplier: 4 },
        { code: 3, foreground: '#9a9a9a', background: '#FFFFFF', multiplier: 20 },
    ]
}

function setColors(objs){

    const setPropertyCss = (variable, color) => document.documentElement.style.setProperty(variable, color);

    setPropertyCss('--blue-1', objs[0].foreground);
    setPropertyCss('--blue-2', objs[0].background);
    
    setPropertyCss('--green-2', objs[1].foreground);
    setPropertyCss('--green-1', objs[1].background);
    
    setPropertyCss('--white-2', objs[2].foreground);
    setPropertyCss('--white-1', objs[2].background);

    btn_escolha_1.innerHTML = objs[0].multiplier+"x"
    btn_escolha_3.innerHTML = objs[1].multiplier+"x"
    btn_escolha_2.innerHTML = objs[2].multiplier+"x"

    
}

// setColors(col)

export default setColors