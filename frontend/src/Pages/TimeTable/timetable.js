import React, { Component, useEffect } from 'react';
import '../TimeTable/timetable.css';



const day = {
    monday : {
        course1 : {
            startTime : 9,
            endTime : 11,
        },
        course2 : {
            startTime : 11,
            endTime : 12,
        },
    },
    tuesday : {
        course1 : {
            startTime : 9,
            endTime : 10,
        },
        course2 : {
            startTime : 11,
            endTime : 12,
        },
        course3 : {
            startTime : 2,
            endTime : 3,
        }
    }
}

export default function GetTimeTable() {

    const getRowData = (day) => {
        let rowData = [];
        for (const key in day) {
            rowData.push(
                <td colSpan={day.key.endTime - day.key.startTime}>
                    {key}
                </td>
            );
        }
        return rowData;
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

                    <th>1</th>

                    <th>2</th>

                    <th>3</th>

                    <th>4</th>

                    <th>5</th>

                    <th>6</th>

                    <th>7</th>

                    <th>8</th>
                </tr>


                <tr>
                    <th>
                        Monday
                    </th>

                    <td colSpan={day.monday.course1.endTime - day.monday.course1.startTime}>
                        course1
                    </td>
                    
                </tr>
                <tr>
                    <th>
                        Tuesday
                    </th>
                </tr>
                <tr>
                    <th>
                        Wednesday
                    </th>
                </tr>
                <tr>
                    <th>
                        Thursday
                    </th>
                </tr>
                <tr>
                    <th>
                        Friday
                    </th>
                </tr>

            </table>

        </div>
    );
}
