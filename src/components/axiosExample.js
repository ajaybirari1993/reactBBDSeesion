import React from 'react';
import axios from "axios";
import styled from "styled-components";

const AxiosExample = () =>{
    let fontSize = '2em';
    const Title = styled.h1`
        font-size: ${fontSize};
        text-align: center;
        color: palevioletred;
    `;

    const Wrapper = styled(Title)`
        text-align:left;
    `;

    return(
        <div>
            <button onClick={()=>getResponse()}>Get Response</button>
            <button onClick={()=>postResponse()}>Post Response</button>
            <Title>Styled H1</Title>
            <Title>Styled </Title>
            <Wrapper>Border H1</Wrapper>
        </div>
    )

    async function getResponse(){
        const headers ={
            "Content-Type":"application/json",
            "Accept":"application/json"
        }

        let response =  await axios.get("https://reqres.in/api/users?page=2", headers);
        console.log(response);

        // axios.get("https://reqrs.in/api/users?page=2", headers).then(res => {
        //     console.log(res);
        // }).catch(error => {
        //     console.log(error);
        // })

        // axios({
        //     method: "GET",
        //     url: "https://reqres.in/api/users?page=2",
        //     headers: headers
        // }).then(res =>{
        //     console.log(res);
        // }).catch(error => {
        //     debugger;
        //     console.log(error);
        // })

        console.log("Don't wait");
    }

    function postResponse(){
        const headers ={
            "Content-Type":"application/json",
            "Accept":"application/json"
        }

        let payload={
            "name": "morpheus",
            "job": "leader"
        }

        // axios.post("https://reqres.in/api/users", payload, headers).then(res =>{
        //     console.log(res);
        // }).catch(error => {
        //     console.log(error);
        // })

        axios({
            method: "POST",
            url: "https://reqres.in/api/users",
            headers: headers,
            data: payload
        }).then(res =>{
            console.log(res);
        }).catch(error => {
            debugger;
            console.log(error);
        })
    }
}

export default AxiosExample;