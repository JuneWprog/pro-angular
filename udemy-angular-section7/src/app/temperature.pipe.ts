import { Pipe, PipeTransform } from '@angular/core';
// custom pipe to convert celsius to fahrenheit
@Pipe({
    name: 'temp',
    standalone: true,

})
export class TemperaturePipe implements PipeTransform {
    //must have a transform method
    transform(value: string|number, inputType: 'celsius'|'fahrenheit', outputType?: 'celsius'|'fahrenheit' ): string {
       
        let val: number;
        if(typeof value === 'string') {
            val = parseFloat(value);
        }else{
            val = value;
        }
        let outputTemp: number;
        if(inputType === 'celsius' && outputType === 'fahrenheit') {
            outputTemp = (val * 9/5) + 32;
            return outputTemp.toFixed(2) + '°F';
        }else if(inputType === 'fahrenheit' && outputType === 'celsius') {
            outputTemp = (val - 32) * 5/9;
            return outputTemp.toFixed(2) + '°C';
        }else if(inputType === 'celsius') {
            return val.toFixed(2) + '°C';
        }else if(inputType === 'fahrenheit') {
            return val.toFixed(2) + '°F';
        }else{
            return val.toFixed(2) + '°C';
        }
        
    }
}
