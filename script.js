var colors = [
        {name: 'Red', red: 255, green: 0, blue: 0},
        {name: 'Orange', red: 255, green: 166, blue: 0},
        {name: 'Yellow',  red: 251, green: 255, blue: 0}
    ]
         var mysteryColor = colors[Math.floor(Math.random() * 3)]

         var mysteryColorRgbVal =  `rgb( ${mysteryColor.red}, ${mysteryColor.green}, ${mysteryColor.blue})`;
        document.getElementById('colorNameLabel').innerHTML = mysteryColor.name;
        document.getElementById("background").style.backgroundColor = mysteryColorRgbVal;

        const intValue = parseInt(mysteryColor.code, 16); 


        function getValue() {
        var colorInput = document.getElementById("color")
        var value = colorInput.value;

        const r = parseInt(value.substring(1, 3), 16);
        const g = parseInt(value.substring(3, 5), 16);
        const b = parseInt(value.substring(5, 7), 16);

         var inputrgbVal = `rgb( ${r}, ${g}, ${b})`

        if ( inputrgbVal == mysteryColorRgbVal){
            console.log(`Answer ${mysteryColorRgbVal}`)
            console.log(`Choice ${inputrgbVal}`)
             console.log('correct')
             document.getElementById('result').innerHTML = 'Correct'
        }
         else{
            console.log(`Answer ${mysteryColorRgbVal}`)
            console.log(`Choice ${inputrgbVal}`)
            console.log('incorrect')

            // red greater than or less
            if (r > mysteryColor.red){
                console.log('Too Much Red')
                document.getElementById('red').innerHTML = 'Too Much Red'
            }
            if (r < mysteryColor.red){
                console.log('Not Enough Red')
                document.getElementById('red').innerHTML = 'Not Enough Red'
            }

             // green greater than or less
            if (g > mysteryColor.green){
                console.log('Too Much Green')
                document.getElementById('green').innerHTML = 'Too Much Green'
            }
            if (g < mysteryColor.green){
                console.log('Not Enough Green')
                document.getElementById('green').innerHTML = 'Not Enough Green'
            }

             // blue greater than or less
            if (b > mysteryColor.blue){
                console.log('Too Much Blue')
                document.getElementById('blue').innerHTML = 'Too Much Blue'
            }
            if (b < mysteryColor.blue){
                console.log('Not Enough Blue')
                document.getElementById('blue').innerHTML = 'Too Much Blue'
            }

            
            if (r == mysteryColor.red){
                console.log('Enough Red')
                document.getElementById('red').innerHTML = 'Enough Red'
            }
            if (g == mysteryColor.green){
                console.log('Enough Green')
                document.getElementById('green').innerHTML = 'Enough Green'
            }
            if (b == mysteryColor.blue){
                console.log('Enough Blue')
                document.getElementById('blue').innerHTML = 'Enough Blue'
            }

            document.getElementById('result').innerHTML = 'Incorrect'
            
        }
        }
        