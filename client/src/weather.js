import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Weather = (props) => {
    const { data } = props;

    if(!data) 
    return <div></div>;

    return (
        <Row className="weather">
            <Col sm="12" md={{ size: 4, offset: 4}}>
                <h2>{data.name}</h2>
                <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather icon"/>
                <span>{data.weather[0].main}</span>&nbsp;
                <span>{Math.floor(data.main.temp)}&deg;C</span>
                <Table>
                    <tbody>
                        <tr>
                            <td>Ветер</td>
                            <td>{Math.floor(data.wind.speed)} км/ч</td>
                        </tr>
                        <tr>
                            <td>Давление</td>
                            <td>{Math.floor(data.main.pressure)} гПа</td>
                        </tr>
                        <tr>
                            <td>Влажность</td>
                            <td>{Math.floor(data.main.humidity)} %</td>
                        </tr>
                        <tr>
                            <td>Минимальная температура</td>
                            <td>{Math.floor(data.main.temp_min)} &deg;C</td>
                        </tr>
                        <tr>
                            <td>Максимальная температура</td>
                            <td>{Math.floor(data.main.temp_max)} &deg;C</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default Weather;