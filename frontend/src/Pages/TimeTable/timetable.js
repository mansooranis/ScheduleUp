import React from 'react';
import '../TimeTable/timetable.css';


export default function GetTimeTable(prop) {

    const getRowData = () => {
        let data = [];
        const param = prop.prop;

        // key : days
        for (let key in param){
            let rowData = []

            for (let i=8; i<21; i++){

                // j : courses
                for (let j in param[key]){
                    if (param[key][j].startTime !== i) {
                        rowData.push(
                            <td>null</td>
                        )
                        
                    }
                    else{
                        const duration = param[key][j].endTime - param[key][j].startTime
                        rowData.push(
                            <td colSpan={duration}>
                                {j}
                            </td>
                        )
                        if (duration > 1){
                            i = i + (duration-1)
                        } 
                        
                    }
                    break;
                }
            }
            data.push(rowData)
        }
        console.log(data)
        return data;
    }   
        
    return (
        <div>
            <h1>TimeTable</h1>
            <table>
                <tr>
                    <th>
                    </th>

                    <th>8</th>
                    
                    <th>9</th>

                    <th>10</th>

                    <th>11</th>

                    <th>12</th>

                    <th>13</th>

                    <th>14</th>

                    <th>15</th>

                    <th>16</th>

                    <th>17</th>

                    <th>18</th>

                    <th>19</th>

                    <th>20</th>
                </tr>


                <tr>
                    <th>
                        Monday
                    </th>

                    {getRowData()[0]}

                </tr>
                <tr>
                    <th>
                        Tuesday
                    </th>

                    {getRowData()[1]}
                </tr>
                <tr>
                    <th>
                        Wednesday
                    </th>

                    {getRowData()[2]}
                </tr>
                <tr>
                    <th>
                        Thursday
                    </th>

                    {getRowData()[3]}
                </tr>
                <tr>
                    <th>
                        Friday
                    </th>

                    {getRowData()[4]}
                </tr>

            </table>

        </div>
    );
}
