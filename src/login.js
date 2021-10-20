import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

function Login({ setUser }) {
    let history = useHistory()

    const onFinish = (values) => {
        //convert json data to application/x-www-form-urlencoded
        let params = ''
        Object.keys(values).map((key) => {
            params += key + '=' + values[key] + '&'
        })
        params = params.substring(0, params.length - 1)

        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            // need to stringify if the content-type is json
            // body: JSON.stringify(values)
            body: params,
        }

        fetch('http://35.223.39.248/login', requestOptions)
            .then((response) => response.json())
            .then((response) => {
                if (response == true) {
                    setUser(values.username)
                    setCount();
                    history.push('/button')
                }
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    function setCount() {
        let url = 'http://35.223.39.248/setCount';
        fetch(url)
    }

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button
                    onClick={() => history.push('/signup')}
                    style={{ marginLeft: '30px' }}
                    type="primary"
                >
                    Signup
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login
